# Generated by Django 5.2.1 on 2025-05-24 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("TamptoProject", "0002_sajili_is_seen"),
    ]

    operations = [
        migrations.AlterField(
            model_name="sajili",
            name="phone_no",
            field=models.CharField(max_length=30),
        ),
    ]
