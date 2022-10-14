FROM python:3.7

WORKDIR /usr/app/src

ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

COPY ./requirements.txt .
RUN pip install -r requirements.txt
RUN python manage.py migrate

COPY . ./
EXPOSE 8000

CMD ["python","manage.py","runserver","0.0.0.0:8000"]