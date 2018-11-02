#!/bin/bash

function log_state {
    now=`date '+%Y-%m-%d %H:%M:%S'`;

    echo ":$1: $now";

    echo ":$1: $now">>"./log/$2.log";
    echo ":$1: $now">>"./log/$2.err";
}

function run_script {
    log_state START "$1";

    echo "$2 ./$1.$3 >>./log/$1.log 2>>./log/$1.err";

    $2 "./$1.$3" >>"./log/$1.log" 2>>"./log/$1.err";

    log_state FINISH "$1";
}

function run_node {
    run_script "$1" "node" "js"
}

function run_bash {
    run_script "$1" "bash" "sh"
}

echo "util_run.sh LOADED :)"
