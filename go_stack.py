from aws_cdk import (
    Stack,
    BundlingOptions,
    aws_lambda as lambda_,
)
from constructs import Construct


class GoStack(Stack):
    def __init__(self, scope: Construct, id: str, **kwargs):
        super().__init__(scope, id, **kwargs)

        environment = {
            'CGO_ENABLED': '0',
            'GOOS': 'linux',
            'GOARCH': 'amd64',
        }

        go_test_lambda_function = lambda_.Function(
            self,
            'GoTestLambdaFunction',
            code=lambda_.Code.from_asset('go',
                                         bundling=BundlingOptions(
                                             image=lambda_.Runtime.GO_1_X.bundling_image,
                                             environment=environment,
                                             user='root',
                                             command=[
                                                 'bash', '-c', """go build -o /asset-output/main"""
                                             ]
                                         )),
            handler='main',
            runtime=lambda_.Runtime.GO_1_X
        )
