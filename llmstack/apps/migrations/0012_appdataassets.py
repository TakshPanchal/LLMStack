# Generated by Django 4.2.11 on 2024-03-29 18:01

import uuid

from django.db import migrations, models

import llmstack.apps.models


class Migration(migrations.Migration):

    dependencies = [
        ("apps", "0011_appsessionfiles"),
    ]

    operations = [
        migrations.CreateModel(
            name="AppDataAssets",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("uuid", models.UUIDField(default=uuid.uuid4, editable=False, help_text="UUID of the asset")),
                ("metadata", models.JSONField(blank=True, default=dict, help_text="Metadata for the asset", null=True)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("ref_id", models.UUIDField(help_text="Published UUID of the app this asset belongs to")),
                (
                    "file",
                    models.FileField(
                        blank=True,
                        null=True,
                        storage=llmstack.apps.models.select_storage,
                        upload_to=llmstack.apps.models.datasource_upload_to,
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
