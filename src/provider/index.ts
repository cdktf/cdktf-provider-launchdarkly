// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LaunchdarklyProviderConfig {
  /**
  * The LaunchDarkly API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs#access_token LaunchdarklyProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * The LaunchDarkly host address, e.g. https://app.launchdarkly.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs#api_host LaunchdarklyProvider#api_host}
  */
  readonly apiHost?: string;
  /**
  * The LaunchDarkly OAuth token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs#oauth_token LaunchdarklyProvider#oauth_token}
  */
  readonly oauthToken?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs#alias LaunchdarklyProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs launchdarkly}
*/
export class LaunchdarklyProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs launchdarkly} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LaunchdarklyProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LaunchdarklyProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.13.4',
        providerVersionConstraint: '~> 2.13'
      },
      terraformProviderSource: 'launchdarkly/launchdarkly'
    });
    this._accessToken = config.accessToken;
    this._apiHost = config.apiHost;
    this._oauthToken = config.oauthToken;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // api_host - computed: false, optional: true, required: false
  private _apiHost?: string; 
  public get apiHost() {
    return this._apiHost;
  }
  public set apiHost(value: string | undefined) {
    this._apiHost = value;
  }
  public resetApiHost() {
    this._apiHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiHostInput() {
    return this._apiHost;
  }

  // oauth_token - computed: false, optional: true, required: false
  private _oauthToken?: string; 
  public get oauthToken() {
    return this._oauthToken;
  }
  public set oauthToken(value: string | undefined) {
    this._oauthToken = value;
  }
  public resetOauthToken() {
    this._oauthToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenInput() {
    return this._oauthToken;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      api_host: cdktf.stringToTerraform(this._apiHost),
      oauth_token: cdktf.stringToTerraform(this._oauthToken),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
