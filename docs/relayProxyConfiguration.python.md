# `relayProxyConfiguration` Submodule <a name="`relayProxyConfiguration` Submodule" id="@cdktf/provider-launchdarkly.relayProxyConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RelayProxyConfiguration <a name="RelayProxyConfiguration" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration launchdarkly_relay_proxy_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import relay_proxy_configuration

relayProxyConfiguration.RelayProxyConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  policy: typing.Union[IResolvable, typing.List[RelayProxyConfigurationPolicy]],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | A human-friendly name for the Relay Proxy configuration. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.policy">policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy">RelayProxyConfigurationPolicy</a>]]</code> | policy block. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration#id RelayProxyConfiguration#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.name"></a>

- *Type:* str

A human-friendly name for the Relay Proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration#name RelayProxyConfiguration#name}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.policy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy">RelayProxyConfigurationPolicy</a>]]

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration#policy RelayProxyConfiguration#policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration#id RelayProxyConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.putPolicy">put_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_policy` <a name="put_policy" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.putPolicy"></a>

```python
def put_policy(
  value: typing.Union[IResolvable, typing.List[RelayProxyConfigurationPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.putPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy">RelayProxyConfigurationPolicy</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RelayProxyConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_launchdarkly import relay_proxy_configuration

relayProxyConfiguration.RelayProxyConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_launchdarkly import relay_proxy_configuration

relayProxyConfiguration.RelayProxyConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_launchdarkly import relay_proxy_configuration

relayProxyConfiguration.RelayProxyConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_launchdarkly import relay_proxy_configuration

relayProxyConfiguration.RelayProxyConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RelayProxyConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RelayProxyConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RelayProxyConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RelayProxyConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.displayKey">display_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.fullKey">full_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList">RelayProxyConfigurationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.policyInput">policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy">RelayProxyConfigurationPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_key`<sup>Required</sup> <a name="display_key" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.displayKey"></a>

```python
display_key: str
```

- *Type:* str

---

##### `full_key`<sup>Required</sup> <a name="full_key" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.fullKey"></a>

```python
full_key: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.policy"></a>

```python
policy: RelayProxyConfigurationPolicyList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList">RelayProxyConfigurationPolicyList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.policyInput"></a>

```python
policy_input: typing.Union[IResolvable, typing.List[RelayProxyConfigurationPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy">RelayProxyConfigurationPolicy</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RelayProxyConfigurationConfig <a name="RelayProxyConfigurationConfig" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import relay_proxy_configuration

relayProxyConfiguration.RelayProxyConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  policy: typing.Union[IResolvable, typing.List[RelayProxyConfigurationPolicy]],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.name">name</a></code> | <code>str</code> | A human-friendly name for the Relay Proxy configuration. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.policy">policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy">RelayProxyConfigurationPolicy</a>]]</code> | policy block. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration#id RelayProxyConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A human-friendly name for the Relay Proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration#name RelayProxyConfiguration#name}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.policy"></a>

```python
policy: typing.Union[IResolvable, typing.List[RelayProxyConfigurationPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy">RelayProxyConfigurationPolicy</a>]]

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration#policy RelayProxyConfiguration#policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration#id RelayProxyConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### RelayProxyConfigurationPolicy <a name="RelayProxyConfigurationPolicy" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import relay_proxy_configuration

relayProxyConfiguration.RelayProxyConfigurationPolicy(
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
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy.property.effect">effect</a></code> | <code>str</code> | Either `allow` or `deny`. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy.property.actions">actions</a></code> | <code>typing.List[str]</code> | The list of action specifiers defining the actions to which the statement applies. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | The list of action specifiers defining the actions to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | The list of resource specifiers defining the resources to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy.property.resources">resources</a></code> | <code>typing.List[str]</code> | The list of resource specifiers defining the resources to which the statement applies. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy.property.effect"></a>

```python
effect: str
```

- *Type:* str

Either `allow` or `deny`.

This argument defines whether the statement allows or denies access to the named resources and actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration#effect RelayProxyConfiguration#effect}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of action specifiers defining the actions to which the statement applies.

Either `actions` or `not_actions` must be specified. For a list of available actions read [Actions reference](https://docs.launchdarkly.com/home/account-security/custom-roles/actions#actions-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration#actions RelayProxyConfiguration#actions}

---

##### `not_actions`<sup>Optional</sup> <a name="not_actions" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of action specifiers defining the actions to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration#not_actions RelayProxyConfiguration#not_actions}

---

##### `not_resources`<sup>Optional</sup> <a name="not_resources" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

The list of resource specifiers defining the resources to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration#not_resources RelayProxyConfiguration#not_resources}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

The list of resource specifiers defining the resources to which the statement applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/relay_proxy_configuration#resources RelayProxyConfiguration#resources}

---

## Classes <a name="Classes" id="Classes"></a>

### RelayProxyConfigurationPolicyList <a name="RelayProxyConfigurationPolicyList" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import relay_proxy_configuration

relayProxyConfiguration.RelayProxyConfigurationPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RelayProxyConfigurationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy">RelayProxyConfigurationPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RelayProxyConfigurationPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy">RelayProxyConfigurationPolicy</a>]]

---


### RelayProxyConfigurationPolicyOutputReference <a name="RelayProxyConfigurationPolicyOutputReference" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import relay_proxy_configuration

relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.resetNotActions">reset_not_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.resetNotResources">reset_not_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_not_actions` <a name="reset_not_actions" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.resetNotActions"></a>

```python
def reset_not_actions() -> None
```

##### `reset_not_resources` <a name="reset_not_resources" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.resetNotResources"></a>

```python
def reset_not_resources() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.notActionsInput">not_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.notResourcesInput">not_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy">RelayProxyConfigurationPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `not_actions_input`<sup>Optional</sup> <a name="not_actions_input" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.notActionsInput"></a>

```python
not_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_resources_input`<sup>Optional</sup> <a name="not_resources_input" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.notResourcesInput"></a>

```python
not_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `not_actions`<sup>Required</sup> <a name="not_actions" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_resources`<sup>Required</sup> <a name="not_resources" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RelayProxyConfigurationPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.relayProxyConfiguration.RelayProxyConfigurationPolicy">RelayProxyConfigurationPolicy</a>]

---



