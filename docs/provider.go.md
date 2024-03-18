# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-launchdarkly.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaunchdarklyProvider <a name="LaunchdarklyProvider" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs launchdarkly}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/provider"

provider.NewLaunchdarklyProvider(scope Construct, id *string, config LaunchdarklyProviderConfig) LaunchdarklyProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig">LaunchdarklyProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig">LaunchdarklyProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetApiHost">ResetApiHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetHttpTimeout">ResetHttpTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOauthToken">ResetOauthToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetApiHost` <a name="ResetApiHost" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetApiHost"></a>

```go
func ResetApiHost()
```

##### `ResetHttpTimeout` <a name="ResetHttpTimeout" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetHttpTimeout"></a>

```go
func ResetHttpTimeout()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOauthToken"></a>

```go
func ResetOauthToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LaunchdarklyProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/provider"

provider.LaunchdarklyProvider_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/provider"

provider.LaunchdarklyProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/provider"

provider.LaunchdarklyProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/provider"

provider.LaunchdarklyProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LaunchdarklyProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LaunchdarklyProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LaunchdarklyProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LaunchdarklyProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessTokenInput">AccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHostInput">ApiHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeoutInput">HttpTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthTokenInput">OauthTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHost">ApiHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeout">HttpTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthToken">OauthToken</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessTokenInput"></a>

```go
func AccessTokenInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ApiHostInput`<sup>Optional</sup> <a name="ApiHostInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHostInput"></a>

```go
func ApiHostInput() *string
```

- *Type:* *string

---

##### `HttpTimeoutInput`<sup>Optional</sup> <a name="HttpTimeoutInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeoutInput"></a>

```go
func HttpTimeoutInput() *f64
```

- *Type:* *f64

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthTokenInput"></a>

```go
func OauthTokenInput() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `ApiHost`<sup>Optional</sup> <a name="ApiHost" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHost"></a>

```go
func ApiHost() *string
```

- *Type:* *string

---

##### `HttpTimeout`<sup>Optional</sup> <a name="HttpTimeout" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeout"></a>

```go
func HttpTimeout() *f64
```

- *Type:* *f64

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthToken"></a>

```go
func OauthToken() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LaunchdarklyProviderConfig <a name="LaunchdarklyProviderConfig" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-launchdarkly-go/launchdarkly/provider"

&provider.LaunchdarklyProviderConfig {
	AccessToken: *string,
	Alias: *string,
	ApiHost: *string,
	HttpTimeout: *f64,
	OauthToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.accessToken">AccessToken</a></code> | <code>*string</code> | The [personal access token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#personal-tokens) or [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens) used to authenticate with LaunchDarkly. You can also set this with the `LAUNCHDARKLY_ACCESS_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.apiHost">ApiHost</a></code> | <code>*string</code> | The LaunchDarkly host address. If this argument is not specified, the default host address is `https://app.launchdarkly.com`. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.httpTimeout">HttpTimeout</a></code> | <code>*f64</code> | The HTTP timeout (in seconds) when making API calls to LaunchDarkly. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.oauthToken">OauthToken</a></code> | <code>*string</code> | An OAuth V2 token you use to authenticate with LaunchDarkly. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

The [personal access token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#personal-tokens) or [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens) used to authenticate with LaunchDarkly. You can also set this with the `LAUNCHDARKLY_ACCESS_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs#access_token LaunchdarklyProvider#access_token}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs#alias LaunchdarklyProvider#alias}

---

##### `ApiHost`<sup>Optional</sup> <a name="ApiHost" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.apiHost"></a>

```go
ApiHost *string
```

- *Type:* *string

The LaunchDarkly host address. If this argument is not specified, the default host address is `https://app.launchdarkly.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs#api_host LaunchdarklyProvider#api_host}

---

##### `HttpTimeout`<sup>Optional</sup> <a name="HttpTimeout" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.httpTimeout"></a>

```go
HttpTimeout *f64
```

- *Type:* *f64

The HTTP timeout (in seconds) when making API calls to LaunchDarkly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs#http_timeout LaunchdarklyProvider#http_timeout}

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.oauthToken"></a>

```go
OauthToken *string
```

- *Type:* *string

An OAuth V2 token you use to authenticate with LaunchDarkly.

You can also set this with the `LAUNCHDARKLY_OAUTH_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.1/docs#oauth_token LaunchdarklyProvider#oauth_token}

---



