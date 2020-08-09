#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { OoglopSiteConfigStack } from '../lib/ooglop_site_config-stack';

const app = new cdk.App();
new OoglopSiteConfigStack(app, 'OoglopSiteConfigStack');
