# `data_launchdarkly_project`

Refer to the Terraform Registory for docs: [`data_launchdarkly_project`](https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/project).

# `dataLaunchdarklyProject` Submodule <a name="`dataLaunchdarklyProject` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyProject <a name="DataLaunchdarklyProject" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/project launchdarkly_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_project

dataLaunchdarklyProject.DataLaunchdarklyProject(
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
  id: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/project#key DataLaunchdarklyProject#key}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/project#id DataLaunchdarklyProject#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags associated with your resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/project#key DataLaunchdarklyProject#key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/project#id DataLaunchdarklyProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/project#tags DataLaunchdarklyProject#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.isConstruct"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_project

dataLaunchdarklyProject.DataLaunchdarklyProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_project

dataLaunchdarklyProject.DataLaunchdarklyProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_project

dataLaunchdarklyProject.DataLaunchdarklyProject.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.clientSideAvailability">client_side_availability</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList">DataLaunchdarklyProjectClientSideAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.defaultClientSideAvailability">default_client_side_availability</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList">DataLaunchdarklyProjectDefaultClientSideAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `client_side_availability`<sup>Required</sup> <a name="client_side_availability" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.clientSideAvailability"></a>

```python
client_side_availability: DataLaunchdarklyProjectClientSideAvailabilityList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList">DataLaunchdarklyProjectClientSideAvailabilityList</a>

---

##### `default_client_side_availability`<sup>Required</sup> <a name="default_client_side_availability" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.defaultClientSideAvailability"></a>

```python
default_client_side_availability: DataLaunchdarklyProjectDefaultClientSideAvailabilityList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList">DataLaunchdarklyProjectDefaultClientSideAvailabilityList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyProjectClientSideAvailability <a name="DataLaunchdarklyProjectClientSideAvailability" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailability.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_project

dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailability()
```


### DataLaunchdarklyProjectConfig <a name="DataLaunchdarklyProjectConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_project

dataLaunchdarklyProject.DataLaunchdarklyProjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  id: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/project#key DataLaunchdarklyProject#key}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/project#id DataLaunchdarklyProject#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags associated with your resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/project#key DataLaunchdarklyProject#key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/project#id DataLaunchdarklyProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/project#tags DataLaunchdarklyProject#tags}

---

### DataLaunchdarklyProjectDefaultClientSideAvailability <a name="DataLaunchdarklyProjectDefaultClientSideAvailability" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailability.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_project

dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailability()
```


## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyProjectClientSideAvailabilityList <a name="DataLaunchdarklyProjectClientSideAvailabilityList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_project

dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLaunchdarklyProjectClientSideAvailabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataLaunchdarklyProjectClientSideAvailabilityOutputReference <a name="DataLaunchdarklyProjectClientSideAvailabilityOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_project

dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.property.usingEnvironmentId">using_environment_id</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.property.usingMobileKey">using_mobile_key</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailability">DataLaunchdarklyProjectClientSideAvailability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `using_environment_id`<sup>Required</sup> <a name="using_environment_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.property.usingEnvironmentId"></a>

```python
using_environment_id: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `using_mobile_key`<sup>Required</sup> <a name="using_mobile_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.property.usingMobileKey"></a>

```python
using_mobile_key: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailabilityOutputReference.property.internalValue"></a>

```python
internal_value: DataLaunchdarklyProjectClientSideAvailability
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectClientSideAvailability">DataLaunchdarklyProjectClientSideAvailability</a>

---


### DataLaunchdarklyProjectDefaultClientSideAvailabilityList <a name="DataLaunchdarklyProjectDefaultClientSideAvailabilityList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_project

dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference <a name="DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import data_launchdarkly_project

dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.property.usingEnvironmentId">using_environment_id</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.property.usingMobileKey">using_mobile_key</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailability">DataLaunchdarklyProjectDefaultClientSideAvailability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `using_environment_id`<sup>Required</sup> <a name="using_environment_id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.property.usingEnvironmentId"></a>

```python
using_environment_id: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `using_mobile_key`<sup>Required</sup> <a name="using_mobile_key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.property.usingMobileKey"></a>

```python
using_mobile_key: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailabilityOutputReference.property.internalValue"></a>

```python
internal_value: DataLaunchdarklyProjectDefaultClientSideAvailability
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyProject.DataLaunchdarklyProjectDefaultClientSideAvailability">DataLaunchdarklyProjectDefaultClientSideAvailability</a>

---



