# `dataLaunchdarklyTeam` Submodule <a name="`dataLaunchdarklyTeam` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyTeam <a name="DataLaunchdarklyTeam" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/team launchdarkly_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_team

dataLaunchdarklyTeam.DataLaunchdarklyTeam(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  custom_role_keys: typing.List[str] = None,
  description: str = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.key">key</a></code> | <code>str</code> | The team's unique key. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.customRoleKeys">custom_role_keys</a></code> | <code>typing.List[str]</code> | A list of keys for custom roles the team has. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.description">description</a></code> | <code>str</code> | The team's description. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/team#id DataLaunchdarklyTeam#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.name">name</a></code> | <code>str</code> | The team's human-readable name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.key"></a>

- *Type:* str

The team's unique key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/team#key DataLaunchdarklyTeam#key}

---

##### `custom_role_keys`<sup>Optional</sup> <a name="custom_role_keys" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.customRoleKeys"></a>

- *Type:* typing.List[str]

A list of keys for custom roles the team has.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/team#custom_role_keys DataLaunchdarklyTeam#custom_role_keys}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.description"></a>

- *Type:* str

The team's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/team#description DataLaunchdarklyTeam#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/team#id DataLaunchdarklyTeam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.Initializer.parameter.name"></a>

- *Type:* str

The team's human-readable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/team#name DataLaunchdarklyTeam#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetCustomRoleKeys">reset_custom_role_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_custom_role_keys` <a name="reset_custom_role_keys" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetCustomRoleKeys"></a>

```python
def reset_custom_role_keys() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataLaunchdarklyTeam resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isConstruct"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_team

dataLaunchdarklyTeam.DataLaunchdarklyTeam.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_team

dataLaunchdarklyTeam.DataLaunchdarklyTeam.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_team

dataLaunchdarklyTeam.DataLaunchdarklyTeam.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_team

dataLaunchdarklyTeam.DataLaunchdarklyTeam.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataLaunchdarklyTeam resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataLaunchdarklyTeam to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataLaunchdarklyTeam that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/team#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataLaunchdarklyTeam to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.maintainers">maintainers</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList">DataLaunchdarklyTeamMaintainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.projectKeys">project_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.customRoleKeysInput">custom_role_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.customRoleKeys">custom_role_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `maintainers`<sup>Required</sup> <a name="maintainers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.maintainers"></a>

```python
maintainers: DataLaunchdarklyTeamMaintainersList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList">DataLaunchdarklyTeamMaintainersList</a>

---

##### `project_keys`<sup>Required</sup> <a name="project_keys" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.projectKeys"></a>

```python
project_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_role_keys_input`<sup>Optional</sup> <a name="custom_role_keys_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.customRoleKeysInput"></a>

```python
custom_role_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `custom_role_keys`<sup>Required</sup> <a name="custom_role_keys" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.customRoleKeys"></a>

```python
custom_role_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeam.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyTeamConfig <a name="DataLaunchdarklyTeamConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_team

dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  custom_role_keys: typing.List[str] = None,
  description: str = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.key">key</a></code> | <code>str</code> | The team's unique key. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.customRoleKeys">custom_role_keys</a></code> | <code>typing.List[str]</code> | A list of keys for custom roles the team has. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.description">description</a></code> | <code>str</code> | The team's description. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/team#id DataLaunchdarklyTeam#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.name">name</a></code> | <code>str</code> | The team's human-readable name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.key"></a>

```python
key: str
```

- *Type:* str

The team's unique key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/team#key DataLaunchdarklyTeam#key}

---

##### `custom_role_keys`<sup>Optional</sup> <a name="custom_role_keys" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.customRoleKeys"></a>

```python
custom_role_keys: typing.List[str]
```

- *Type:* typing.List[str]

A list of keys for custom roles the team has.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/team#custom_role_keys DataLaunchdarklyTeam#custom_role_keys}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The team's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/team#description DataLaunchdarklyTeam#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/team#id DataLaunchdarklyTeam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The team's human-readable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/team#name DataLaunchdarklyTeam#name}

---

### DataLaunchdarklyTeamMaintainers <a name="DataLaunchdarklyTeamMaintainers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainers.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_team

dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyTeamMaintainersList <a name="DataLaunchdarklyTeamMaintainersList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_team

dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLaunchdarklyTeamMaintainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataLaunchdarklyTeamMaintainersOutputReference <a name="DataLaunchdarklyTeamMaintainersOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_team

dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainers">DataLaunchdarklyTeamMaintainers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainersOutputReference.property.internalValue"></a>

```python
internal_value: DataLaunchdarklyTeamMaintainers
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyTeam.DataLaunchdarklyTeamMaintainers">DataLaunchdarklyTeamMaintainers</a>

---



