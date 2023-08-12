# `launchdarkly_environment`

Refer to the Terraform Registory for docs: [`launchdarkly_environment`](https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment).

# `environment` Submodule <a name="`environment` Submodule" id="@cdktf/provider-launchdarkly.environment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Environment <a name="Environment" id="@cdktf/provider-launchdarkly.environment.Environment"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment launchdarkly_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import environment

environment.Environment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  color: str,
  key: str,
  name: str,
  project_key: str,
  approval_settings: typing.Union[IResolvable, typing.List[EnvironmentApprovalSettings]] = None,
  confirm_changes: typing.Union[bool, IResolvable] = None,
  default_track_events: typing.Union[bool, IResolvable] = None,
  default_ttl: typing.Union[int, float] = None,
  id: str = None,
  require_comments: typing.Union[bool, IResolvable] = None,
  secure_mode: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.color">color</a></code> | <code>str</code> | The color swatch as an RGB hex value with no leading `#`. For example: `000000`. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.key">key</a></code> | <code>str</code> | The project-unique key for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.projectKey">project_key</a></code> | <code>str</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.approvalSettings">approval_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>]]</code> | approval_settings block. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.confirmChanges">confirm_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` if this environment requires confirmation for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.defaultTrackEvents">default_track_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` to enable data export for every flag created in this environment after you configure this argument. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#id Environment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.requireComments">require_comments</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` if this environment requires comments for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.secureMode">secure_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` to ensure a user of the client-side SDK cannot impersonate another user. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags associated with your resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.color"></a>

- *Type:* str

The color swatch as an RGB hex value with no leading `#`. For example: `000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#color Environment#color}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.key"></a>

- *Type:* str

The project-unique key for the environment.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#key Environment#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.name"></a>

- *Type:* str

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#name Environment#name}

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.projectKey"></a>

- *Type:* str

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#project_key Environment#project_key}

---

##### `approval_settings`<sup>Optional</sup> <a name="approval_settings" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.approvalSettings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>]]

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#approval_settings Environment#approval_settings}

---

##### `confirm_changes`<sup>Optional</sup> <a name="confirm_changes" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.confirmChanges"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` if this environment requires confirmation for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#confirm_changes Environment#confirm_changes}

---

##### `default_track_events`<sup>Optional</sup> <a name="default_track_events" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.defaultTrackEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` to enable data export for every flag created in this environment after you configure this argument.

This field will default to `false` when not set. To learn more, read [Data Export](https://docs.launchdarkly.com/home/data-export).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#default_track_events Environment#default_track_events}

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.defaultTtl"></a>

- *Type:* typing.Union[int, float]

The TTL for the environment.

This must be between 0 and 60 minutes. The TTL setting only applies to environments using the PHP SDK. This field will default to `0` when not set. To learn more, read [TTL settings](https://docs.launchdarkly.com/home/organize/environments#ttl-settings).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#default_ttl Environment#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#id Environment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `require_comments`<sup>Optional</sup> <a name="require_comments" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.requireComments"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` if this environment requires comments for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#require_comments Environment#require_comments}

---

##### `secure_mode`<sup>Optional</sup> <a name="secure_mode" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.secureMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` to ensure a user of the client-side SDK cannot impersonate another user.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#secure_mode Environment#secure_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.environment.Environment.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#tags Environment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.putApprovalSettings">put_approval_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetApprovalSettings">reset_approval_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetConfirmChanges">reset_confirm_changes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetDefaultTrackEvents">reset_default_track_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetDefaultTtl">reset_default_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetRequireComments">reset_require_comments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetSecureMode">reset_secure_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.environment.Environment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-launchdarkly.environment.Environment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.environment.Environment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.environment.Environment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-launchdarkly.environment.Environment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-launchdarkly.environment.Environment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-launchdarkly.environment.Environment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-launchdarkly.environment.Environment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-launchdarkly.environment.Environment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.Environment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_approval_settings` <a name="put_approval_settings" id="@cdktf/provider-launchdarkly.environment.Environment.putApprovalSettings"></a>

```python
def put_approval_settings(
  value: typing.Union[IResolvable, typing.List[EnvironmentApprovalSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.environment.Environment.putApprovalSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>]]

---

##### `reset_approval_settings` <a name="reset_approval_settings" id="@cdktf/provider-launchdarkly.environment.Environment.resetApprovalSettings"></a>

```python
def reset_approval_settings() -> None
```

##### `reset_confirm_changes` <a name="reset_confirm_changes" id="@cdktf/provider-launchdarkly.environment.Environment.resetConfirmChanges"></a>

```python
def reset_confirm_changes() -> None
```

##### `reset_default_track_events` <a name="reset_default_track_events" id="@cdktf/provider-launchdarkly.environment.Environment.resetDefaultTrackEvents"></a>

```python
def reset_default_track_events() -> None
```

##### `reset_default_ttl` <a name="reset_default_ttl" id="@cdktf/provider-launchdarkly.environment.Environment.resetDefaultTtl"></a>

```python
def reset_default_ttl() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-launchdarkly.environment.Environment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_require_comments` <a name="reset_require_comments" id="@cdktf/provider-launchdarkly.environment.Environment.resetRequireComments"></a>

```python
def reset_require_comments() -> None
```

##### `reset_secure_mode` <a name="reset_secure_mode" id="@cdktf/provider-launchdarkly.environment.Environment.resetSecureMode"></a>

```python
def reset_secure_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-launchdarkly.environment.Environment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-launchdarkly.environment.Environment.isConstruct"></a>

```python
from cdktf_cdktf_provider_launchdarkly import environment

environment.Environment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.environment.Environment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_launchdarkly import environment

environment.Environment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_launchdarkly import environment

environment.Environment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.environment.Environment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettings">approval_settings</a></code> | <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList">EnvironmentApprovalSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.clientSideId">client_side_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.mobileKey">mobile_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettingsInput">approval_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.colorInput">color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.confirmChangesInput">confirm_changes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEventsInput">default_track_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtlInput">default_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.projectKeyInput">project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.requireCommentsInput">require_comments_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.secureModeInput">secure_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.color">color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.confirmChanges">confirm_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEvents">default_track_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.requireComments">require_comments</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.secureMode">secure_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.environment.Environment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-launchdarkly.environment.Environment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.environment.Environment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-launchdarkly.environment.Environment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-launchdarkly.environment.Environment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-launchdarkly.environment.Environment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-launchdarkly.environment.Environment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.environment.Environment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.environment.Environment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.environment.Environment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.environment.Environment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.environment.Environment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.environment.Environment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.environment.Environment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-launchdarkly.environment.Environment.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `approval_settings`<sup>Required</sup> <a name="approval_settings" id="@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettings"></a>

```python
approval_settings: EnvironmentApprovalSettingsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList">EnvironmentApprovalSettingsList</a>

---

##### `client_side_id`<sup>Required</sup> <a name="client_side_id" id="@cdktf/provider-launchdarkly.environment.Environment.property.clientSideId"></a>

```python
client_side_id: str
```

- *Type:* str

---

##### `mobile_key`<sup>Required</sup> <a name="mobile_key" id="@cdktf/provider-launchdarkly.environment.Environment.property.mobileKey"></a>

```python
mobile_key: str
```

- *Type:* str

---

##### `approval_settings_input`<sup>Optional</sup> <a name="approval_settings_input" id="@cdktf/provider-launchdarkly.environment.Environment.property.approvalSettingsInput"></a>

```python
approval_settings_input: typing.Union[IResolvable, typing.List[EnvironmentApprovalSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>]]

---

##### `color_input`<sup>Optional</sup> <a name="color_input" id="@cdktf/provider-launchdarkly.environment.Environment.property.colorInput"></a>

```python
color_input: str
```

- *Type:* str

---

##### `confirm_changes_input`<sup>Optional</sup> <a name="confirm_changes_input" id="@cdktf/provider-launchdarkly.environment.Environment.property.confirmChangesInput"></a>

```python
confirm_changes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_track_events_input`<sup>Optional</sup> <a name="default_track_events_input" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEventsInput"></a>

```python
default_track_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_ttl_input`<sup>Optional</sup> <a name="default_ttl_input" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtlInput"></a>

```python
default_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-launchdarkly.environment.Environment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-launchdarkly.environment.Environment.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-launchdarkly.environment.Environment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_key_input`<sup>Optional</sup> <a name="project_key_input" id="@cdktf/provider-launchdarkly.environment.Environment.property.projectKeyInput"></a>

```python
project_key_input: str
```

- *Type:* str

---

##### `require_comments_input`<sup>Optional</sup> <a name="require_comments_input" id="@cdktf/provider-launchdarkly.environment.Environment.property.requireCommentsInput"></a>

```python
require_comments_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secure_mode_input`<sup>Optional</sup> <a name="secure_mode_input" id="@cdktf/provider-launchdarkly.environment.Environment.property.secureModeInput"></a>

```python
secure_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-launchdarkly.environment.Environment.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-launchdarkly.environment.Environment.property.color"></a>

```python
color: str
```

- *Type:* str

---

##### `confirm_changes`<sup>Required</sup> <a name="confirm_changes" id="@cdktf/provider-launchdarkly.environment.Environment.property.confirmChanges"></a>

```python
confirm_changes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_track_events`<sup>Required</sup> <a name="default_track_events" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTrackEvents"></a>

```python
default_track_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktf/provider-launchdarkly.environment.Environment.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.environment.Environment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.environment.Environment.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.environment.Environment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-launchdarkly.environment.Environment.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

##### `require_comments`<sup>Required</sup> <a name="require_comments" id="@cdktf/provider-launchdarkly.environment.Environment.property.requireComments"></a>

```python
require_comments: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secure_mode`<sup>Required</sup> <a name="secure_mode" id="@cdktf/provider-launchdarkly.environment.Environment.property.secureMode"></a>

```python
secure_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.environment.Environment.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.Environment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.environment.Environment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EnvironmentApprovalSettings <a name="EnvironmentApprovalSettings" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import environment

environment.EnvironmentApprovalSettings(
  can_apply_declined_changes: typing.Union[bool, IResolvable] = None,
  can_review_own_request: typing.Union[bool, IResolvable] = None,
  min_num_approvals: typing.Union[int, float] = None,
  required: typing.Union[bool, IResolvable] = None,
  required_approval_tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canApplyDeclinedChanges">can_apply_declined_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canReviewOwnRequest">can_review_own_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.minNumApprovals">min_num_approvals</a></code> | <code>typing.Union[int, float]</code> | The number of approvals required before an approval request can be applied. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` for changes to flags in this environment to require approval. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.requiredApprovalTags">required_approval_tags</a></code> | <code>typing.List[str]</code> | An array of tags used to specify which flags with those tags require approval. |

---

##### `can_apply_declined_changes`<sup>Optional</sup> <a name="can_apply_declined_changes" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canApplyDeclinedChanges"></a>

```python
can_apply_declined_changes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request.

Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#can_apply_declined_changes Environment#can_apply_declined_changes}

---

##### `can_review_own_request`<sup>Optional</sup> <a name="can_review_own_request" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.canReviewOwnRequest"></a>

```python
can_review_own_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#can_review_own_request Environment#can_review_own_request}

---

##### `min_num_approvals`<sup>Optional</sup> <a name="min_num_approvals" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.minNumApprovals"></a>

```python
min_num_approvals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of approvals required before an approval request can be applied.

This number must be between 1 and 5. Defaults to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#min_num_approvals Environment#min_num_approvals}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` for changes to flags in this environment to require approval.

You may only set `required` to true if `required_approval_tags` is not set and vice versa. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#required Environment#required}

---

##### `required_approval_tags`<sup>Optional</sup> <a name="required_approval_tags" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings.property.requiredApprovalTags"></a>

```python
required_approval_tags: typing.List[str]
```

- *Type:* typing.List[str]

An array of tags used to specify which flags with those tags require approval.

You may only set `required_approval_tags` if `required` is not set to `true` and vice versa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#required_approval_tags Environment#required_approval_tags}

---

### EnvironmentConfig <a name="EnvironmentConfig" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import environment

environment.EnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  color: str,
  key: str,
  name: str,
  project_key: str,
  approval_settings: typing.Union[IResolvable, typing.List[EnvironmentApprovalSettings]] = None,
  confirm_changes: typing.Union[bool, IResolvable] = None,
  default_track_events: typing.Union[bool, IResolvable] = None,
  default_ttl: typing.Union[int, float] = None,
  id: str = None,
  require_comments: typing.Union[bool, IResolvable] = None,
  secure_mode: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.color">color</a></code> | <code>str</code> | The color swatch as an RGB hex value with no leading `#`. For example: `000000`. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.key">key</a></code> | <code>str</code> | The project-unique key for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.name">name</a></code> | <code>str</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.projectKey">project_key</a></code> | <code>str</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.approvalSettings">approval_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>]]</code> | approval_settings block. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.confirmChanges">confirm_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` if this environment requires confirmation for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTrackEvents">default_track_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` to enable data export for every flag created in this environment after you configure this argument. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#id Environment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.requireComments">require_comments</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` if this environment requires comments for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.secureMode">secure_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` to ensure a user of the client-side SDK cannot impersonate another user. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags associated with your resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.color"></a>

```python
color: str
```

- *Type:* str

The color swatch as an RGB hex value with no leading `#`. For example: `000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#color Environment#color}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.key"></a>

```python
key: str
```

- *Type:* str

The project-unique key for the environment.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#key Environment#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#name Environment#name}

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#project_key Environment#project_key}

---

##### `approval_settings`<sup>Optional</sup> <a name="approval_settings" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.approvalSettings"></a>

```python
approval_settings: typing.Union[IResolvable, typing.List[EnvironmentApprovalSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>]]

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#approval_settings Environment#approval_settings}

---

##### `confirm_changes`<sup>Optional</sup> <a name="confirm_changes" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.confirmChanges"></a>

```python
confirm_changes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` if this environment requires confirmation for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#confirm_changes Environment#confirm_changes}

---

##### `default_track_events`<sup>Optional</sup> <a name="default_track_events" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTrackEvents"></a>

```python
default_track_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` to enable data export for every flag created in this environment after you configure this argument.

This field will default to `false` when not set. To learn more, read [Data Export](https://docs.launchdarkly.com/home/data-export).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#default_track_events Environment#default_track_events}

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TTL for the environment.

This must be between 0 and 60 minutes. The TTL setting only applies to environments using the PHP SDK. This field will default to `0` when not set. To learn more, read [TTL settings](https://docs.launchdarkly.com/home/organize/environments#ttl-settings).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#default_ttl Environment#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#id Environment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `require_comments`<sup>Optional</sup> <a name="require_comments" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.requireComments"></a>

```python
require_comments: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` if this environment requires comments for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#require_comments Environment#require_comments}

---

##### `secure_mode`<sup>Optional</sup> <a name="secure_mode" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.secureMode"></a>

```python
secure_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` to ensure a user of the client-side SDK cannot impersonate another user.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#secure_mode Environment#secure_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.environment.EnvironmentConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/environment#tags Environment#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### EnvironmentApprovalSettingsList <a name="EnvironmentApprovalSettingsList" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import environment

environment.EnvironmentApprovalSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EnvironmentApprovalSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EnvironmentApprovalSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>]]

---


### EnvironmentApprovalSettingsOutputReference <a name="EnvironmentApprovalSettingsOutputReference" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import environment

environment.EnvironmentApprovalSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetCanApplyDeclinedChanges">reset_can_apply_declined_changes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetCanReviewOwnRequest">reset_can_review_own_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetMinNumApprovals">reset_min_num_approvals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetRequiredApprovalTags">reset_required_approval_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_can_apply_declined_changes` <a name="reset_can_apply_declined_changes" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetCanApplyDeclinedChanges"></a>

```python
def reset_can_apply_declined_changes() -> None
```

##### `reset_can_review_own_request` <a name="reset_can_review_own_request" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetCanReviewOwnRequest"></a>

```python
def reset_can_review_own_request() -> None
```

##### `reset_min_num_approvals` <a name="reset_min_num_approvals" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetMinNumApprovals"></a>

```python
def reset_min_num_approvals() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_required_approval_tags` <a name="reset_required_approval_tags" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.resetRequiredApprovalTags"></a>

```python
def reset_required_approval_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput">can_apply_declined_changes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequestInput">can_review_own_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovalsInput">min_num_approvals_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTagsInput">required_approval_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChanges">can_apply_declined_changes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequest">can_review_own_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovals">min_num_approvals</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTags">required_approval_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `can_apply_declined_changes_input`<sup>Optional</sup> <a name="can_apply_declined_changes_input" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput"></a>

```python
can_apply_declined_changes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `can_review_own_request_input`<sup>Optional</sup> <a name="can_review_own_request_input" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequestInput"></a>

```python
can_review_own_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_num_approvals_input`<sup>Optional</sup> <a name="min_num_approvals_input" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovalsInput"></a>

```python
min_num_approvals_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `required_approval_tags_input`<sup>Optional</sup> <a name="required_approval_tags_input" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTagsInput"></a>

```python
required_approval_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `can_apply_declined_changes`<sup>Required</sup> <a name="can_apply_declined_changes" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canApplyDeclinedChanges"></a>

```python
can_apply_declined_changes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `can_review_own_request`<sup>Required</sup> <a name="can_review_own_request" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.canReviewOwnRequest"></a>

```python
can_review_own_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_num_approvals`<sup>Required</sup> <a name="min_num_approvals" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.minNumApprovals"></a>

```python
min_num_approvals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_approval_tags`<sup>Required</sup> <a name="required_approval_tags" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.requiredApprovalTags"></a>

```python
required_approval_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EnvironmentApprovalSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.environment.EnvironmentApprovalSettings">EnvironmentApprovalSettings</a>]

---



