# Generated by Django 3.2.5 on 2021-07-30 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_rename_phtoto_member_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='members_profile'),
        ),
    ]
