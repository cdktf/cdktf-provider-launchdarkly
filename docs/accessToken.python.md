# `accessToken` Submodule <a name="`accessToken` Submodule" id="@cdktf/provider-launchdarkly.accessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessToken <a name="AccessToken" id="@cdktf/provider-launchdarkly.accessToken.AccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token launchdarkly_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import access_token

accessToken.AccessToken(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_roles: typing.List[str] = None,
  default_api_version: typing.Union[int, float] = None,
  expire: typing.Union[int, float] = None,
  id: str = None,
  inline_roles: typing.Union[IResolvable, typing.List[AccessTokenInlineRoles]] = None,
  name: str = None,
  policy_statements: typing.Union[IResolvable, typing.List[AccessTokenPolicyStatements]] = None,
  role: str = None,
  service_token: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.customRoles">custom_roles</a></code> | <code>typing.List[str]</code> | A list of custom role IDs to use as access limits for the access token. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.defaultApiVersion">default_api_version</a></code> | <code>typing.Union[int, float]</code> | The default API version for this token. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.expire">expire</a></code> | <code>typing.Union[int, float]</code> | An expiration time for the current token secret, expressed as a Unix epoch time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#id AccessToken#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.inlineRoles">inline_roles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>]]</code> | inline_roles block. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.name">name</a></code> | <code>str</code> | A human-friendly name for the access token. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.policyStatements">policy_statements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>]]</code> | policy_statements block. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.role">role</a></code> | <code>str</code> | A built-in LaunchDarkly role. Can be `reader`, `writer`, or `admin`. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.serviceToken">service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the token will be a [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens). A change in this field will force the destruction of the existing token and the creation of a new one. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_roles`<sup>Optional</sup> <a name="custom_roles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.customRoles"></a>

- *Type:* typing.List[str]

A list of custom role IDs to use as access limits for the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#custom_roles AccessToken#custom_roles}

---

##### `default_api_version`<sup>Optional</sup> <a name="default_api_version" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.defaultApiVersion"></a>

- *Type:* typing.Union[int, float]

The default API version for this token.

Defaults to the latest API version. A change in this field will force the destruction of the existing token in state and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#default_api_version AccessToken#default_api_version}

---

##### `expire`<sup>Optional</sup> <a name="expire" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.expire"></a>

- *Type:* typing.Union[int, float]

An expiration time for the current token secret, expressed as a Unix epoch time.

Replace the computed token secret with a new value. The expired secret will no longer be able to authorize usage of the LaunchDarkly API. This field argument is **deprecated**. Please update your config to remove `expire` to maintain compatibility with future versions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#expire AccessToken#expire}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#id AccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inline_roles`<sup>Optional</sup> <a name="inline_roles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.inlineRoles"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>]]

inline_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#inline_roles AccessToken#inline_roles}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.name"></a>

- *Type:* str

A human-friendly name for the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#name AccessToken#name}

---

##### `policy_statements`<sup>Optional</sup> <a name="policy_statements" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.policyStatements"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>]]

policy_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#policy_statements AccessToken#policy_statements}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.role"></a>

- *Type:* str

A built-in LaunchDarkly role. Can be `reader`, `writer`, or `admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#role AccessToken#role}

---

##### `service_token`<sup>Optional</sup> <a name="service_token" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.Initializer.parameter.serviceToken"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the token will be a [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens). A change in this field will force the destruction of the existing token and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#service_token AccessToken#service_token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.putInlineRoles">put_inline_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.putPolicyStatements">put_policy_statements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetCustomRoles">reset_custom_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetDefaultApiVersion">reset_default_api_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetExpire">reset_expire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetInlineRoles">reset_inline_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetPolicyStatements">reset_policy_statements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.resetServiceToken">reset_service_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_inline_roles` <a name="put_inline_roles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.putInlineRoles"></a>

```python
def put_inline_roles(
  value: typing.Union[IResolvable, typing.List[AccessTokenInlineRoles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.putInlineRoles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>]]

---

##### `put_policy_statements` <a name="put_policy_statements" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.putPolicyStatements"></a>

```python
def put_policy_statements(
  value: typing.Union[IResolvable, typing.List[AccessTokenPolicyStatements]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.putPolicyStatements.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>]]

---

##### `reset_custom_roles` <a name="reset_custom_roles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetCustomRoles"></a>

```python
def reset_custom_roles() -> None
```

##### `reset_default_api_version` <a name="reset_default_api_version" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetDefaultApiVersion"></a>

```python
def reset_default_api_version() -> None
```

##### `reset_expire` <a name="reset_expire" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetExpire"></a>

```python
def reset_expire() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inline_roles` <a name="reset_inline_roles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetInlineRoles"></a>

```python
def reset_inline_roles() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_policy_statements` <a name="reset_policy_statements" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetPolicyStatements"></a>

```python
def reset_policy_statements() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_service_token` <a name="reset_service_token" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.resetServiceToken"></a>

```python
def reset_service_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isConstruct"></a>

```python
from cdktf_cdktf_provider_launchdarkly import access_token

accessToken.AccessToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_launchdarkly import access_token

accessToken.AccessToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_launchdarkly import access_token

accessToken.AccessToken.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_launchdarkly import access_token

accessToken.AccessToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccessToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccessToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.inlineRoles">inline_roles</a></code> | <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList">AccessTokenInlineRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.policyStatements">policy_statements</a></code> | <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList">AccessTokenPolicyStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.customRolesInput">custom_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.defaultApiVersionInput">default_api_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.expireInput">expire_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.inlineRolesInput">inline_roles_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.policyStatementsInput">policy_statements_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.serviceTokenInput">service_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.customRoles">custom_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.defaultApiVersion">default_api_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.expire">expire</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.serviceToken">service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `inline_roles`<sup>Required</sup> <a name="inline_roles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.inlineRoles"></a>

```python
inline_roles: AccessTokenInlineRolesList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList">AccessTokenInlineRolesList</a>

---

##### `policy_statements`<sup>Required</sup> <a name="policy_statements" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.policyStatements"></a>

```python
policy_statements: AccessTokenPolicyStatementsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList">AccessTokenPolicyStatementsList</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `custom_roles_input`<sup>Optional</sup> <a name="custom_roles_input" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.customRolesInput"></a>

```python
custom_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_api_version_input`<sup>Optional</sup> <a name="default_api_version_input" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.defaultApiVersionInput"></a>

```python
default_api_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expire_input`<sup>Optional</sup> <a name="expire_input" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.expireInput"></a>

```python
expire_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inline_roles_input`<sup>Optional</sup> <a name="inline_roles_input" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.inlineRolesInput"></a>

```python
inline_roles_input: typing.Union[IResolvable, typing.List[AccessTokenInlineRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_statements_input`<sup>Optional</sup> <a name="policy_statements_input" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.policyStatementsInput"></a>

```python
policy_statements_input: typing.Union[IResolvable, typing.List[AccessTokenPolicyStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>]]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `service_token_input`<sup>Optional</sup> <a name="service_token_input" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.serviceTokenInput"></a>

```python
service_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_roles`<sup>Required</sup> <a name="custom_roles" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.customRoles"></a>

```python
custom_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_api_version`<sup>Required</sup> <a name="default_api_version" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.defaultApiVersion"></a>

```python
default_api_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.expire"></a>

```python
expire: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `service_token`<sup>Required</sup> <a name="service_token" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.serviceToken"></a>

```python
service_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.accessToken.AccessToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessTokenConfig <a name="AccessTokenConfig" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import access_token

accessToken.AccessTokenConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_roles: typing.List[str] = None,
  default_api_version: typing.Union[int, float] = None,
  expire: typing.Union[int, float] = None,
  id: str = None,
  inline_roles: typing.Union[IResolvable, typing.List[AccessTokenInlineRoles]] = None,
  name: str = None,
  policy_statements: typing.Union[IResolvable, typing.List[AccessTokenPolicyStatements]] = None,
  role: str = None,
  service_token: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.customRoles">custom_roles</a></code> | <code>typing.List[str]</code> | A list of custom role IDs to use as access limits for the access token. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.defaultApiVersion">default_api_version</a></code> | <code>typing.Union[int, float]</code> | The default API version for this token. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.expire">expire</a></code> | <code>typing.Union[int, float]</code> | An expiration time for the current token secret, expressed as a Unix epoch time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#id AccessToken#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.inlineRoles">inline_roles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>]]</code> | inline_roles block. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.name">name</a></code> | <code>str</code> | A human-friendly name for the access token. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.policyStatements">policy_statements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>]]</code> | policy_statements block. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.role">role</a></code> | <code>str</code> | A built-in LaunchDarkly role. Can be `reader`, `writer`, or `admin`. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.serviceToken">service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the token will be a [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens). A change in this field will force the destruction of the existing token and the creation of a new one. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_roles`<sup>Optional</sup> <a name="custom_roles" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.customRoles"></a>

```python
custom_roles: typing.List[str]
```

- *Type:* typing.List[str]

A list of custom role IDs to use as access limits for the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#custom_roles AccessToken#custom_roles}

---

##### `default_api_version`<sup>Optional</sup> <a name="default_api_version" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.defaultApiVersion"></a>

```python
default_api_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default API version for this token.

Defaults to the latest API version. A change in this field will force the destruction of the existing token in state and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#default_api_version AccessToken#default_api_version}

---

##### `expire`<sup>Optional</sup> <a name="expire" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.expire"></a>

```python
expire: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An expiration time for the current token secret, expressed as a Unix epoch time.

Replace the computed token secret with a new value. The expired secret will no longer be able to authorize usage of the LaunchDarkly API. This field argument is **deprecated**. Please update your config to remove `expire` to maintain compatibility with future versions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#expire AccessToken#expire}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#id AccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inline_roles`<sup>Optional</sup> <a name="inline_roles" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.inlineRoles"></a>

```python
inline_roles: typing.Union[IResolvable, typing.List[AccessTokenInlineRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>]]

inline_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#inline_roles AccessToken#inline_roles}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A human-friendly name for the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#name AccessToken#name}

---

##### `policy_statements`<sup>Optional</sup> <a name="policy_statements" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.policyStatements"></a>

```python
policy_statements: typing.Union[IResolvable, typing.List[AccessTokenPolicyStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>]]

policy_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#policy_statements AccessToken#policy_statements}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.role"></a>

```python
role: str
```

- *Type:* str

A built-in LaunchDarkly role. Can be `reader`, `writer`, or `admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#role AccessToken#role}

---

##### `service_token`<sup>Optional</sup> <a name="service_token" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenConfig.property.serviceToken"></a>

```python
service_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the token will be a [service token](https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens). A change in this field will force the destruction of the existing token and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#service_token AccessToken#service_token}

---

### AccessTokenInlineRoles <a name="AccessTokenInlineRoles" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import access_token

accessToken.AccessTokenInlineRoles(
  effect: str,
  actions: typing.List[str] = None,
  not_actions: typing.List[str] = None,
  not_resources: typing.List[str] = None,
  resources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.effect">effect</a></code> | <code>str</code> | Either `allow` or `deny`. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.actions">actions</a></code> | <code>typing.List[str]</code> | The list of action specifiers defining the actions to which the statement applies. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | The list of action specifiers defining the actions to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | The list of resource specifiers defining the resources to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.resources">resources</a></code> | <code>typing.List[str]</code> | The list of resource specifiers defining the resources to which the statement applies. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.effect"></a>

```python
effect: str
```

- *Type:* str

Either `allow` or `deny`.

This argument defines whether the statement allows or denies access to the named resources and actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#effect AccessToken#effect}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of action specifiers defining the actions to which the statement applies.

Either `actions` or `not_actions` must be specified. For a list of available actions read [Actions reference](https://docs.launchdarkly.com/home/account-security/custom-roles/actions#actions-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#actions AccessToken#actions}

---

##### `not_actions`<sup>Optional</sup> <a name="not_actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of action specifiers defining the actions to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#not_actions AccessToken#not_actions}

---

##### `not_resources`<sup>Optional</sup> <a name="not_resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

The list of resource specifiers defining the resources to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#not_resources AccessToken#not_resources}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

The list of resource specifiers defining the resources to which the statement applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#resources AccessToken#resources}

---

### AccessTokenPolicyStatements <a name="AccessTokenPolicyStatements" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import access_token

accessToken.AccessTokenPolicyStatements(
  effect: str,
  actions: typing.List[str] = None,
  not_actions: typing.List[str] = None,
  not_resources: typing.List[str] = None,
  resources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.effect">effect</a></code> | <code>str</code> | Either `allow` or `deny`. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.actions">actions</a></code> | <code>typing.List[str]</code> | The list of action specifiers defining the actions to which the statement applies. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | The list of action specifiers defining the actions to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | The list of resource specifiers defining the resources to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.resources">resources</a></code> | <code>typing.List[str]</code> | The list of resource specifiers defining the resources to which the statement applies. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.effect"></a>

```python
effect: str
```

- *Type:* str

Either `allow` or `deny`.

This argument defines whether the statement allows or denies access to the named resources and actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#effect AccessToken#effect}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of action specifiers defining the actions to which the statement applies.

Either `actions` or `not_actions` must be specified. For a list of available actions read [Actions reference](https://docs.launchdarkly.com/home/account-security/custom-roles/actions#actions-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#actions AccessToken#actions}

---

##### `not_actions`<sup>Optional</sup> <a name="not_actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of action specifiers defining the actions to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#not_actions AccessToken#not_actions}

---

##### `not_resources`<sup>Optional</sup> <a name="not_resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

The list of resource specifiers defining the resources to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#not_resources AccessToken#not_resources}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

The list of resource specifiers defining the resources to which the statement applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.17.0/docs/resources/access_token#resources AccessToken#resources}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessTokenInlineRolesList <a name="AccessTokenInlineRolesList" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import access_token

accessToken.AccessTokenInlineRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessTokenInlineRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessTokenInlineRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>]]

---


### AccessTokenInlineRolesOutputReference <a name="AccessTokenInlineRolesOutputReference" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import access_token

accessToken.AccessTokenInlineRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetNotActions">reset_not_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetNotResources">reset_not_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_not_actions` <a name="reset_not_actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetNotActions"></a>

```python
def reset_not_actions() -> None
```

##### `reset_not_resources` <a name="reset_not_resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetNotResources"></a>

```python
def reset_not_resources() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notActionsInput">not_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notResourcesInput">not_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `not_actions_input`<sup>Optional</sup> <a name="not_actions_input" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notActionsInput"></a>

```python
not_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_resources_input`<sup>Optional</sup> <a name="not_resources_input" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notResourcesInput"></a>

```python
not_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `not_actions`<sup>Required</sup> <a name="not_actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_resources`<sup>Required</sup> <a name="not_resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRolesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessTokenInlineRoles]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenInlineRoles">AccessTokenInlineRoles</a>]

---


### AccessTokenPolicyStatementsList <a name="AccessTokenPolicyStatementsList" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import access_token

accessToken.AccessTokenPolicyStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessTokenPolicyStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessTokenPolicyStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>]]

---


### AccessTokenPolicyStatementsOutputReference <a name="AccessTokenPolicyStatementsOutputReference" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import access_token

accessToken.AccessTokenPolicyStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetNotActions">reset_not_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetNotResources">reset_not_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_not_actions` <a name="reset_not_actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetNotActions"></a>

```python
def reset_not_actions() -> None
```

##### `reset_not_resources` <a name="reset_not_resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetNotResources"></a>

```python
def reset_not_resources() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notActionsInput">not_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notResourcesInput">not_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `not_actions_input`<sup>Optional</sup> <a name="not_actions_input" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notActionsInput"></a>

```python
not_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_resources_input`<sup>Optional</sup> <a name="not_resources_input" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notResourcesInput"></a>

```python
not_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `not_actions`<sup>Required</sup> <a name="not_actions" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_resources`<sup>Required</sup> <a name="not_resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatementsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessTokenPolicyStatements]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.accessToken.AccessTokenPolicyStatements">AccessTokenPolicyStatements</a>]

---



