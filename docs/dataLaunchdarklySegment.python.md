# `dataLaunchdarklySegment` Submodule <a name="`dataLaunchdarklySegment` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklySegment <a name="DataLaunchdarklySegment" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/segment launchdarkly_segment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  env_key: str,
  key: str,
  project_key: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.envKey">env_key</a></code> | <code>str</code> | The segment's environment key. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.key">key</a></code> | <code>str</code> | The unique key that references the segment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.projectKey">project_key</a></code> | <code>str</code> | The segment's project key. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/segment#id DataLaunchdarklySegment#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env_key`<sup>Required</sup> <a name="env_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.envKey"></a>

- *Type:* str

The segment's environment key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/segment#env_key DataLaunchdarklySegment#env_key}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.key"></a>

- *Type:* str

The unique key that references the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/segment#key DataLaunchdarklySegment#key}

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.projectKey"></a>

- *Type:* str

The segment's project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/segment#project_key DataLaunchdarklySegment#project_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/segment#id DataLaunchdarklySegment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataLaunchdarklySegment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.isConstruct"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataLaunchdarklySegment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataLaunchdarklySegment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataLaunchdarklySegment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/segment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataLaunchdarklySegment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.creationDate">creation_date</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.excluded">excluded</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.excludedContexts">excluded_contexts</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList">DataLaunchdarklySegmentExcludedContextsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.included">included</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.includedContexts">included_contexts</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList">DataLaunchdarklySegmentIncludedContextsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList">DataLaunchdarklySegmentRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.unbounded">unbounded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.unboundedContextKind">unbounded_context_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.envKeyInput">env_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.projectKeyInput">project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.envKey">env_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.creationDate"></a>

```python
creation_date: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `excluded`<sup>Required</sup> <a name="excluded" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.excluded"></a>

```python
excluded: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_contexts`<sup>Required</sup> <a name="excluded_contexts" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.excludedContexts"></a>

```python
excluded_contexts: DataLaunchdarklySegmentExcludedContextsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList">DataLaunchdarklySegmentExcludedContextsList</a>

---

##### `included`<sup>Required</sup> <a name="included" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.included"></a>

```python
included: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_contexts`<sup>Required</sup> <a name="included_contexts" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.includedContexts"></a>

```python
included_contexts: DataLaunchdarklySegmentIncludedContextsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList">DataLaunchdarklySegmentIncludedContextsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.rules"></a>

```python
rules: DataLaunchdarklySegmentRulesList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList">DataLaunchdarklySegmentRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `unbounded`<sup>Required</sup> <a name="unbounded" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.unbounded"></a>

```python
unbounded: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `unbounded_context_kind`<sup>Required</sup> <a name="unbounded_context_kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.unboundedContextKind"></a>

```python
unbounded_context_kind: str
```

- *Type:* str

---

##### `env_key_input`<sup>Optional</sup> <a name="env_key_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.envKeyInput"></a>

```python
env_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `project_key_input`<sup>Optional</sup> <a name="project_key_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.projectKeyInput"></a>

```python
project_key_input: str
```

- *Type:* str

---

##### `env_key`<sup>Required</sup> <a name="env_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.envKey"></a>

```python
env_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklySegmentConfig <a name="DataLaunchdarklySegmentConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  env_key: str,
  key: str,
  project_key: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.envKey">env_key</a></code> | <code>str</code> | The segment's environment key. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.key">key</a></code> | <code>str</code> | The unique key that references the segment. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.projectKey">project_key</a></code> | <code>str</code> | The segment's project key. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/segment#id DataLaunchdarklySegment#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env_key`<sup>Required</sup> <a name="env_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.envKey"></a>

```python
env_key: str
```

- *Type:* str

The segment's environment key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/segment#env_key DataLaunchdarklySegment#env_key}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.key"></a>

```python
key: str
```

- *Type:* str

The unique key that references the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/segment#key DataLaunchdarklySegment#key}

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

The segment's project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/segment#project_key DataLaunchdarklySegment#project_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.4/docs/data-sources/segment#id DataLaunchdarklySegment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataLaunchdarklySegmentExcludedContexts <a name="DataLaunchdarklySegmentExcludedContexts" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContexts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContexts.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContexts()
```


### DataLaunchdarklySegmentIncludedContexts <a name="DataLaunchdarklySegmentIncludedContexts" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContexts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContexts.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContexts()
```


### DataLaunchdarklySegmentRules <a name="DataLaunchdarklySegmentRules" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRules.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegmentRules()
```


### DataLaunchdarklySegmentRulesClauses <a name="DataLaunchdarklySegmentRulesClauses" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClauses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClauses.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClauses()
```


## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklySegmentExcludedContextsList <a name="DataLaunchdarklySegmentExcludedContextsList" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLaunchdarklySegmentExcludedContextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataLaunchdarklySegmentExcludedContextsOutputReference <a name="DataLaunchdarklySegmentExcludedContextsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.property.contextKind">context_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContexts">DataLaunchdarklySegmentExcludedContexts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_kind`<sup>Required</sup> <a name="context_kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.property.contextKind"></a>

```python
context_kind: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContextsOutputReference.property.internalValue"></a>

```python
internal_value: DataLaunchdarklySegmentExcludedContexts
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentExcludedContexts">DataLaunchdarklySegmentExcludedContexts</a>

---


### DataLaunchdarklySegmentIncludedContextsList <a name="DataLaunchdarklySegmentIncludedContextsList" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLaunchdarklySegmentIncludedContextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataLaunchdarklySegmentIncludedContextsOutputReference <a name="DataLaunchdarklySegmentIncludedContextsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.property.contextKind">context_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContexts">DataLaunchdarklySegmentIncludedContexts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_kind`<sup>Required</sup> <a name="context_kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.property.contextKind"></a>

```python
context_kind: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContextsOutputReference.property.internalValue"></a>

```python
internal_value: DataLaunchdarklySegmentIncludedContexts
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentIncludedContexts">DataLaunchdarklySegmentIncludedContexts</a>

---


### DataLaunchdarklySegmentRulesClausesList <a name="DataLaunchdarklySegmentRulesClausesList" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLaunchdarklySegmentRulesClausesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataLaunchdarklySegmentRulesClausesOutputReference <a name="DataLaunchdarklySegmentRulesClausesOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.contextKind">context_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.negate">negate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.op">op</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClauses">DataLaunchdarklySegmentRulesClauses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `context_kind`<sup>Required</sup> <a name="context_kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.contextKind"></a>

```python
context_kind: str
```

- *Type:* str

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.negate"></a>

```python
negate: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.op"></a>

```python
op: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesOutputReference.property.internalValue"></a>

```python
internal_value: DataLaunchdarklySegmentRulesClauses
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClauses">DataLaunchdarklySegmentRulesClauses</a>

---


### DataLaunchdarklySegmentRulesList <a name="DataLaunchdarklySegmentRulesList" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLaunchdarklySegmentRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataLaunchdarklySegmentRulesOutputReference <a name="DataLaunchdarklySegmentRulesOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_segment

dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.property.bucketBy">bucket_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.property.clauses">clauses</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList">DataLaunchdarklySegmentRulesClausesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.property.rolloutContextKind">rollout_context_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRules">DataLaunchdarklySegmentRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_by`<sup>Required</sup> <a name="bucket_by" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.property.bucketBy"></a>

```python
bucket_by: str
```

- *Type:* str

---

##### `clauses`<sup>Required</sup> <a name="clauses" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.property.clauses"></a>

```python
clauses: DataLaunchdarklySegmentRulesClausesList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesClausesList">DataLaunchdarklySegmentRulesClausesList</a>

---

##### `rollout_context_kind`<sup>Required</sup> <a name="rollout_context_kind" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.property.rolloutContextKind"></a>

```python
rollout_context_kind: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataLaunchdarklySegmentRules
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklySegment.DataLaunchdarklySegmentRules">DataLaunchdarklySegmentRules</a>

---



