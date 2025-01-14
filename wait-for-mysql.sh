#!/bin/sh

set -e

host="$DB_HOST"
port="$DB_PORT"

echo "Waiting for MySQL at $host:$port..."

while ! nc -z "$host" "$port"; do
  sleep 1
done

echo "MySQL is ready - starting the application..."
exec "$@"
