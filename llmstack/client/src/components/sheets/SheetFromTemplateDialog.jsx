import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axios } from "../../data/axios";
import { useRecoilValue } from "recoil";
import { sheetTemplatesSelector } from "../../data/atoms";
import { columnIndexToLetter } from "./utils";

export function SheetFromTemplateDialog({
  open,
  setOpen,
  sheet,
  setSheet,
  sheetId,
  setSheetId,
}) {
  const [sheetName, setSheetName] = useState(sheet?.name || "Untitled");
  const [sheetDescription, setSheetDescription] = useState(
    sheet?.description || "",
  );
  const [sheetTemplate, setSheetTemplate] = useState("");
  const [sheetCells, setSheetCells] = useState({});
  const [sheetColumns, setSheetColumns] = useState(() => {
    const columns = [];
    for (let i = 0; i < 26; i++) {
      const letter = columnIndexToLetter(i);
      columns.push({ title: "", col_letter: letter, cell_type: 0 });
    }
    return columns;
  });
  const [sheetTotalColumns, setSheetTotalColumns] = useState(26);
  const [sheetTotalRows, setSheetTotalRows] = useState(20);
  const sheetTemplates = useRecoilValue(sheetTemplatesSelector);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    let payload = {
      name: sheetName,
      description: sheetDescription,
    };

    if (!sheetId) {
      payload.cells = sheetCells;
      payload.columns = sheetColumns;
      payload.total_rows = sheetTotalRows;
      payload.total_columns = sheetTotalColumns;
    }

    const method = sheetId ? "patch" : "post";
    const url = sheetId ? `/api/sheets/${sheetId}` : "/api/sheets";

    axios()
      [method](url, payload)
      .then((response) => {
        setSheetId(response.data.uuid);
        setSheet(response.data);
        setOpen(false);
        if (!sheetId) {
          navigate(`/sheets/${response.data.uuid}`);
        }
      });
  };

  const handleTemplateChange = (templateSlug) => {
    setSheetTemplate(templateSlug);
    const template = sheetTemplates[templateSlug];

    // Iterate through total_columns and create columns if they don't exist
    const newColumns = [];
    for (let i = 0; i < template.total_columns; i++) {
      const existingColumn = template.columns.find(
        (column) => column.col_letter === columnIndexToLetter(i),
      );

      if (existingColumn) {
        newColumns.push(existingColumn);
      } else {
        newColumns.push({
          title: "",
          col_letter: columnIndexToLetter(i),
          cell_type: 0,
        });
      }
    }

    setSheetCells(template?.cells || {});
    setSheetColumns(newColumns);
    setSheetTotalRows(template?.total_rows || 1);
    setSheetTotalColumns(template?.total_columns || 26);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>{sheetId ? "Edit Sheet" : "Create Sheet"}</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Typography variant="body1" sx={{ paddingBottom: 4 }}>
            {sheetId
              ? "Edit your sheet details below."
              : "Create a new sheet by filling out the details below."}
          </Typography>
          <TextField
            label="Sheet Name"
            value={sheetName}
            variant="outlined"
            onChange={(e) => setSheetName(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
          <TextField
            label="Description"
            value={sheetDescription}
            multiline
            rows={2}
            placeholder="Enter a description for your sheet"
            helperText="This is optional description of your sheet. It will help you and others understand what this sheet is for."
            onChange={(e) => setSheetDescription(e.target.value)}
          />
          {!sheetId && sheetTemplates && (
            <FormControl fullWidth>
              <InputLabel
                id="template-select-label"
                sx={{
                  backgroundColor: "white",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "text.secondary",
                  padding: "0 4px",
                }}
              >
                Use an existing template (optional)
              </InputLabel>
              <Select
                labelId="template-select-label"
                id="template-select"
                value={sheetTemplate}
                onChange={(e) => handleTemplateChange(e.target.value)}
                sx={{
                  padding: "0.5rem",
                }}
                renderValue={(value) => {
                  return sheetTemplates[value].name;
                }}
              >
                {Object.values(sheetTemplates).map((template) => (
                  <MenuItem key={template.slug} value={template.slug}>
                    <Stack direction={"column"} spacing={0}>
                      <Typography variant="body1">{template.name}</Typography>
                      <Typography variant="caption">
                        {template.description}
                      </Typography>
                    </Stack>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">
          {sheetId ? "Save Changes" : "Create Sheet"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
