# Generated by Django 5.0.2 on 2024-02-13 04:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('puzzle_database', '0005_customuser_otp'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='is_active',
            field=models.BooleanField(default=False),
        ),
    ]
