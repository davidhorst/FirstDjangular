from celery import shared_task,current_task

@shared_task
def add(x, y):
    return x + y
