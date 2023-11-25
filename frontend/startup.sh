#!/bin/sh
# Retrieve all app config values.
prefix=APP_ENV_VAR
script=$(echo "<script id=\""$prefix"\">")
env | awk -F "=" '{print $1}' | grep "$prefix.*" | while read n ; do
    start=$(echo "window."$n" = '")
    val=$(printenv $n)
    line=$(echo $start$val"';")
    sed -i "\|$start|d" /usr/share/nginx/html/index.html
    awk -v line="$line" -v script="$script" '$0~script { print; print line; next}1' /usr/share/nginx/html/index.html > /usr/share/nginx/html/temp.html
    cp /usr/share/nginx/html/temp.html /usr/share/nginx/html/index.html
done

# Remove the temp file.
rm /usr/share/nginx/html/temp.html

# Start nginx.
nginx -g 'daemon off;'