# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-launchdarkly.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaunchdarklyProvider <a name="LaunchdarklyProvider" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs launchdarkly}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import provider

provider.LaunchdarklyProvider(
  scope: Construct,
  id: str,
  access_token: str = None,
  alias: str = None,
  api_host: str = None,
  http_timeout: typing.Union[int, float] = None,
  oauth_token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.accessToken">access_token</a></code> | <code>str</code> | The [personal access token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#personal-tokens) or [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens) used to authenticate with LaunchDarkly. You can also set this with the `LAUNCHDARKLY_ACCESS_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.apiHost">api_host</a></code> | <code>str</code> | The LaunchDarkly host address. If this argument is not specified, the default host address is `https://app.launchdarkly.com`. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.httpTimeout">http_timeout</a></code> | <code>typing.Union[int, float]</code> | The HTTP timeout (in seconds) when making API calls to LaunchDarkly. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.oauthToken">oauth_token</a></code> | <code>str</code> | An OAuth V2 token you use to authenticate with LaunchDarkly. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.accessToken"></a>

- *Type:* str

The [personal access token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#personal-tokens) or [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens) used to authenticate with LaunchDarkly. You can also set this with the `LAUNCHDARKLY_ACCESS_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs#access_token LaunchdarklyProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs#alias LaunchdarklyProvider#alias}

---

##### `api_host`<sup>Optional</sup> <a name="api_host" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.apiHost"></a>

- *Type:* str

The LaunchDarkly host address. If this argument is not specified, the default host address is `https://app.launchdarkly.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs#api_host LaunchdarklyProvider#api_host}

---

##### `http_timeout`<sup>Optional</sup> <a name="http_timeout" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.httpTimeout"></a>

- *Type:* typing.Union[int, float]

The HTTP timeout (in seconds) when making API calls to LaunchDarkly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs#http_timeout LaunchdarklyProvider#http_timeout}

---

##### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.Initializer.parameter.oauthToken"></a>

- *Type:* str

An OAuth V2 token you use to authenticate with LaunchDarkly.

You can also set this with the `LAUNCHDARKLY_OAUTH_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs#oauth_token LaunchdarklyProvider#oauth_token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetApiHost">reset_api_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetHttpTimeout">reset_http_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOauthToken">reset_oauth_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_access_token` <a name="reset_access_token" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_api_host` <a name="reset_api_host" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetApiHost"></a>

```python
def reset_api_host() -> None
```

##### `reset_http_timeout` <a name="reset_http_timeout" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetHttpTimeout"></a>

```python
def reset_http_timeout() -> None
```

##### `reset_oauth_token` <a name="reset_oauth_token" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.resetOauthToken"></a>

```python
def reset_oauth_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LaunchdarklyProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_launchdarkly import provider

provider.LaunchdarklyProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_launchdarkly import provider

provider.LaunchdarklyProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_launchdarkly import provider

provider.LaunchdarklyProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_launchdarkly import provider

provider.LaunchdarklyProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LaunchdarklyProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LaunchdarklyProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LaunchdarklyProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LaunchdarklyProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHostInput">api_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeoutInput">http_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthTokenInput">oauth_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHost">api_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeout">http_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthToken">oauth_token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `api_host_input`<sup>Optional</sup> <a name="api_host_input" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHostInput"></a>

```python
api_host_input: str
```

- *Type:* str

---

##### `http_timeout_input`<sup>Optional</sup> <a name="http_timeout_input" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeoutInput"></a>

```python
http_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_token_input`<sup>Optional</sup> <a name="oauth_token_input" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthTokenInput"></a>

```python
oauth_token_input: str
```

- *Type:* str

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `api_host`<sup>Optional</sup> <a name="api_host" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.apiHost"></a>

```python
api_host: str
```

- *Type:* str

---

##### `http_timeout`<sup>Optional</sup> <a name="http_timeout" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.httpTimeout"></a>

```python
http_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LaunchdarklyProviderConfig <a name="LaunchdarklyProviderConfig" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import provider

provider.LaunchdarklyProviderConfig(
  access_token: str = None,
  alias: str = None,
  api_host: str = None,
  http_timeout: typing.Union[int, float] = None,
  oauth_token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.accessToken">access_token</a></code> | <code>str</code> | The [personal access token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#personal-tokens) or [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens) used to authenticate with LaunchDarkly. You can also set this with the `LAUNCHDARKLY_ACCESS_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.apiHost">api_host</a></code> | <code>str</code> | The LaunchDarkly host address. If this argument is not specified, the default host address is `https://app.launchdarkly.com`. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.httpTimeout">http_timeout</a></code> | <code>typing.Union[int, float]</code> | The HTTP timeout (in seconds) when making API calls to LaunchDarkly. |
| <code><a href="#@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.oauthToken">oauth_token</a></code> | <code>str</code> | An OAuth V2 token you use to authenticate with LaunchDarkly. |

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

The [personal access token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#personal-tokens) or [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens) used to authenticate with LaunchDarkly. You can also set this with the `LAUNCHDARKLY_ACCESS_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs#access_token LaunchdarklyProvider#access_token}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs#alias LaunchdarklyProvider#alias}

---

##### `api_host`<sup>Optional</sup> <a name="api_host" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.apiHost"></a>

```python
api_host: str
```

- *Type:* str

The LaunchDarkly host address. If this argument is not specified, the default host address is `https://app.launchdarkly.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs#api_host LaunchdarklyProvider#api_host}

---

##### `http_timeout`<sup>Optional</sup> <a name="http_timeout" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.httpTimeout"></a>

```python
http_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The HTTP timeout (in seconds) when making API calls to LaunchDarkly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs#http_timeout LaunchdarklyProvider#http_timeout}

---

##### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-launchdarkly.provider.LaunchdarklyProviderConfig.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

An OAuth V2 token you use to authenticate with LaunchDarkly.

You can also set this with the `LAUNCHDARKLY_OAUTH_TOKEN` environment variable. You must provide either `access_token` or `oauth_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs#oauth_token LaunchdarklyProvider#oauth_token}

---



