import * as cdk from '@aws-cdk/core';
import * as path from "path";
import * as lambda from '@aws-cdk/aws-lambda';


export class GoStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // Build the code and create the lambda
        const lambdaFunction = this.buildAndInstallGOLambda('backend-api');
    }

    buildAndInstallGOLambda(id: string): lambda.Function {
        const environment = {
            CGO_ENABLED: '0',
            GOOS: 'linux',
            GOARCH: 'amd64',
        };
        return new lambda.Function(this, id, {
            code: lambda.Code.fromAsset('go', {
                bundling: {
                    image: lambda.Runtime.GO_1_X.bundlingImage,
                    user: "root",
                    environment,
                    command: [
                        'bash', '-c',
                        'go build -o /asset-output/main'
                    ]
                },
            }),
            handler: 'main',
            runtime: lambda.Runtime.GO_1_X
        });
    }
}