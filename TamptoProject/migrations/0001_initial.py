# Generated by Django 5.2.1 on 2025-05-24 00:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="michango",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("fname", models.CharField(max_length=15)),
                ("lname", models.CharField(max_length=15)),
                ("email", models.EmailField(max_length=254, unique=True)),
                ("phone_no", models.CharField(max_length=15)),
                ("region", models.CharField(max_length=23)),
                ("amount", models.DecimalField(decimal_places=2, max_digits=12)),
                ("regions", models.CharField(max_length=20)),
                ("payment", models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name="sajili",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("fname", models.CharField(max_length=15)),
                ("lname", models.CharField(max_length=15)),
                ("email", models.EmailField(max_length=254, unique=True)),
                ("phone_no", models.CharField(max_length=15)),
                ("gender", models.CharField(max_length=6)),
                ("tshirt", models.CharField(max_length=2)),
                (
                    "tickets_child",
                    models.CharField(blank=True, max_length=8, null=True),
                ),
                (
                    "tickets_adult",
                    models.CharField(blank=True, max_length=8, null=True),
                ),
            ],
        ),
    ]
