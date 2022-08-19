# Read Me

This repository serves as an example of how to correctly bundle and deploy a golang lambda function via the CDK using either python or typescript.

# Setting up your environment

1. **Recommended:** Install VSCode (https://code.visualstudio.com/). I've found this to be the best IDE for multi-platform development due to its good integration with WSL2 on Windows.
    1. If you're using Windows, install the remote WSL extension for VSCode to enable your IDE to access both your Windows OS and WSL2: https://code.visualstudio.com/blogs/2019/09/03/wsl2
1. If your local development environment is Windows:
    1. Install Docker desktop for Windows: https://docs.docker.com/desktop/install/windows-install/ and that your OS and hardware meets the requirements.
    1. Install the Windows Subsystem for Linux v2 (a.k.a. WSL2) to create a local linux development environment and perform all of the subsequent steps within that environment: https://docs.microsoft.com/en-us/windows/wsl/install
    1. Install the Docker Desktop backend for WSL2: https://docs.docker.com/desktop/windows/wsl/


1. **Recommended:** Install the AWS CLI. While not necessary for pure CDK deployment, the CLI is useful for querying and manipulating AWS resources in ways more flexible than the AWS console: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
1. Ensure you have configured AWS credentials with access to your AWS IAM account: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html
1. Ensure your IAM account has the permissions to perform the necessary actions on the AWS resources that you plan to create and manipulate.
1. Install the AWS CDK v2: https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html

# Deployment

1. Ensure Docker Desktop is running in the background to enable your go module to be bundled within the bundling container.
1. Run ```cdk synth``` and ensure that the resources you have defined in your app and stacks can create a cloudformation template.
1. Run ```cdk deploy``` to create or update the resources in your stack.
