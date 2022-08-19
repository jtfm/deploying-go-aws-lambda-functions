#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { GoStack } from './go-stack';


const app = new cdk.App();
new GoStack(app, 'GoDeploymentWithTypescript');