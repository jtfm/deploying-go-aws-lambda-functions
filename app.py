#!/usr/bin/env python3


from aws_cdk import (
    App,
)

from go_stack import GoStack


app = App()

go_test_api_tack = GoStack(
    app,
    'GoDeploymentWithPython')

app.synth()