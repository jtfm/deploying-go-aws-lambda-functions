# Read Me

This repository serves as an example of how to correctly bundle and deploy a golang lambda function via the CDK using either python or typescript.

To deploy to your AWS account:

1. (Recommended) Install VSCode (https://code.visualstudio.com/). I've found this to be the best IDE for multi-platform development due to its good integration with WSL2 on Windows.
    1. If you're using Windows, install the remote WSL extension for VSCode to enable your IDE to access both your Windows OS and WSL2: https://code.visualstudio.com/blogs/2019/09/03/wsl2
2. If your local development environment is Windows:
    1. Install Docker desktop for Windows: https://docs.docker.com/desktop/install/windows-install/
    2. Install the Windows Subsystem for Linux v2 (a.k.a. WSL2) to create a local linux development environment and perform all of the subsequent steps within that environment: https://docs.microsoft.com/en-us/windows/wsl/install
    3. Install the Docker Desktop backend for WSL2: https://docs.docker.com/desktop/windows/wsl/


3. Install the AWS CLI: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
4. Ensure you have configured AWS credentials with access to your AWS IAM account: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html
5. Ensure your IAM account has the permissions to perform the necessary actions on the AWS resources that you plan to create and manipulate.
6. Install the AWS CDK v2: https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html

Deployment
1. Run ```cdk synth``` and ensure that the resources you have defined in your app and stacks can create a cloudformation template.
2. Run ```cdk deploy``` to create or update the resources in your stack.
