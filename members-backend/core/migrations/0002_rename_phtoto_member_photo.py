# Generated by Django 3.2.5 on 2021-07-28 19:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='member',
            old_name='phtoto',
            new_name='photo',
        ),
    ]
