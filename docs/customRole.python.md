# `customRole` Submodule <a name="`customRole` Submodule" id="@cdktf/provider-launchdarkly.customRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomRole <a name="CustomRole" id="@cdktf/provider-launchdarkly.customRole.CustomRole"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role launchdarkly_custom_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import custom_role

customRole.CustomRole(
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
  name: str,
  base_permissions: str = None,
  description: str = None,
  id: str = None,
  policy: typing.Union[IResolvable, typing.List[CustomRolePolicy]] = None,
  policy_statements: typing.Union[IResolvable, typing.List[CustomRolePolicyStatements]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.key">key</a></code> | <code>str</code> | A unique key that will be used to reference the custom role in your code. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.name">name</a></code> | <code>str</code> | A name for the custom role. This must be unique within your organization. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.basePermissions">base_permissions</a></code> | <code>str</code> | The base permission level - either reader or no_access. Defaults to reader. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the custom role. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#id CustomRole#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.policy">policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicy">CustomRolePolicy</a>]]</code> | policy block. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.policyStatements">policy_statements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements">CustomRolePolicyStatements</a>]]</code> | policy_statements block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.key"></a>

- *Type:* str

A unique key that will be used to reference the custom role in your code.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#key CustomRole#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.name"></a>

- *Type:* str

A name for the custom role. This must be unique within your organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#name CustomRole#name}

---

##### `base_permissions`<sup>Optional</sup> <a name="base_permissions" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.basePermissions"></a>

- *Type:* str

The base permission level - either reader or no_access. Defaults to reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#base_permissions CustomRole#base_permissions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.description"></a>

- *Type:* str

Description of the custom role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#description CustomRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#id CustomRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.policy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicy">CustomRolePolicy</a>]]

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#policy CustomRole#policy}

---

##### `policy_statements`<sup>Optional</sup> <a name="policy_statements" id="@cdktf/provider-launchdarkly.customRole.CustomRole.Initializer.parameter.policyStatements"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements">CustomRolePolicyStatements</a>]]

policy_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#policy_statements CustomRole#policy_statements}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.putPolicy">put_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.putPolicyStatements">put_policy_statements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.resetBasePermissions">reset_base_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.resetPolicyStatements">reset_policy_statements</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.customRole.CustomRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-launchdarkly.customRole.CustomRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.customRole.CustomRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.customRole.CustomRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-launchdarkly.customRole.CustomRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-launchdarkly.customRole.CustomRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-launchdarkly.customRole.CustomRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-launchdarkly.customRole.CustomRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-launchdarkly.customRole.CustomRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-launchdarkly.customRole.CustomRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-launchdarkly.customRole.CustomRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.customRole.CustomRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-launchdarkly.customRole.CustomRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-launchdarkly.customRole.CustomRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.customRole.CustomRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_policy` <a name="put_policy" id="@cdktf/provider-launchdarkly.customRole.CustomRole.putPolicy"></a>

```python
def put_policy(
  value: typing.Union[IResolvable, typing.List[CustomRolePolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.customRole.CustomRole.putPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicy">CustomRolePolicy</a>]]

---

##### `put_policy_statements` <a name="put_policy_statements" id="@cdktf/provider-launchdarkly.customRole.CustomRole.putPolicyStatements"></a>

```python
def put_policy_statements(
  value: typing.Union[IResolvable, typing.List[CustomRolePolicyStatements]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.customRole.CustomRole.putPolicyStatements.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements">CustomRolePolicyStatements</a>]]

---

##### `reset_base_permissions` <a name="reset_base_permissions" id="@cdktf/provider-launchdarkly.customRole.CustomRole.resetBasePermissions"></a>

```python
def reset_base_permissions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-launchdarkly.customRole.CustomRole.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-launchdarkly.customRole.CustomRole.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_policy_statements` <a name="reset_policy_statements" id="@cdktf/provider-launchdarkly.customRole.CustomRole.resetPolicyStatements"></a>

```python
def reset_policy_statements() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CustomRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-launchdarkly.customRole.CustomRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_launchdarkly import custom_role

customRole.CustomRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.customRole.CustomRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-launchdarkly.customRole.CustomRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_launchdarkly import custom_role

customRole.CustomRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.customRole.CustomRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-launchdarkly.customRole.CustomRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_launchdarkly import custom_role

customRole.CustomRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.customRole.CustomRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-launchdarkly.customRole.CustomRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_launchdarkly import custom_role

customRole.CustomRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CustomRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.customRole.CustomRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.customRole.CustomRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList">CustomRolePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.policyStatements">policy_statements</a></code> | <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList">CustomRolePolicyStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.basePermissionsInput">base_permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.policyInput">policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicy">CustomRolePolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.policyStatementsInput">policy_statements_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements">CustomRolePolicyStatements</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.basePermissions">base_permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.policy"></a>

```python
policy: CustomRolePolicyList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList">CustomRolePolicyList</a>

---

##### `policy_statements`<sup>Required</sup> <a name="policy_statements" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.policyStatements"></a>

```python
policy_statements: CustomRolePolicyStatementsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList">CustomRolePolicyStatementsList</a>

---

##### `base_permissions_input`<sup>Optional</sup> <a name="base_permissions_input" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.basePermissionsInput"></a>

```python
base_permissions_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.policyInput"></a>

```python
policy_input: typing.Union[IResolvable, typing.List[CustomRolePolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicy">CustomRolePolicy</a>]]

---

##### `policy_statements_input`<sup>Optional</sup> <a name="policy_statements_input" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.policyStatementsInput"></a>

```python
policy_statements_input: typing.Union[IResolvable, typing.List[CustomRolePolicyStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements">CustomRolePolicyStatements</a>]]

---

##### `base_permissions`<sup>Required</sup> <a name="base_permissions" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.basePermissions"></a>

```python
base_permissions: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.customRole.CustomRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomRoleConfig <a name="CustomRoleConfig" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import custom_role

customRole.CustomRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  name: str,
  base_permissions: str = None,
  description: str = None,
  id: str = None,
  policy: typing.Union[IResolvable, typing.List[CustomRolePolicy]] = None,
  policy_statements: typing.Union[IResolvable, typing.List[CustomRolePolicyStatements]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.key">key</a></code> | <code>str</code> | A unique key that will be used to reference the custom role in your code. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.name">name</a></code> | <code>str</code> | A name for the custom role. This must be unique within your organization. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.basePermissions">base_permissions</a></code> | <code>str</code> | The base permission level - either reader or no_access. Defaults to reader. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.description">description</a></code> | <code>str</code> | Description of the custom role. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#id CustomRole#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.policy">policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicy">CustomRolePolicy</a>]]</code> | policy block. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.policyStatements">policy_statements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements">CustomRolePolicyStatements</a>]]</code> | policy_statements block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.key"></a>

```python
key: str
```

- *Type:* str

A unique key that will be used to reference the custom role in your code.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#key CustomRole#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name for the custom role. This must be unique within your organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#name CustomRole#name}

---

##### `base_permissions`<sup>Optional</sup> <a name="base_permissions" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.basePermissions"></a>

```python
base_permissions: str
```

- *Type:* str

The base permission level - either reader or no_access. Defaults to reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#base_permissions CustomRole#base_permissions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the custom role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#description CustomRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#id CustomRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.policy"></a>

```python
policy: typing.Union[IResolvable, typing.List[CustomRolePolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicy">CustomRolePolicy</a>]]

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#policy CustomRole#policy}

---

##### `policy_statements`<sup>Optional</sup> <a name="policy_statements" id="@cdktf/provider-launchdarkly.customRole.CustomRoleConfig.property.policyStatements"></a>

```python
policy_statements: typing.Union[IResolvable, typing.List[CustomRolePolicyStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements">CustomRolePolicyStatements</a>]]

policy_statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#policy_statements CustomRole#policy_statements}

---

### CustomRolePolicy <a name="CustomRolePolicy" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import custom_role

customRole.CustomRolePolicy(
  actions: typing.List[str],
  effect: str,
  resources: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicy.property.actions">actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#actions CustomRole#actions}. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicy.property.effect">effect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#effect CustomRole#effect}. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicy.property.resources">resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#resources CustomRole#resources}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicy.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#actions CustomRole#actions}.

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicy.property.effect"></a>

```python
effect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#effect CustomRole#effect}.

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicy.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#resources CustomRole#resources}.

---

### CustomRolePolicyStatements <a name="CustomRolePolicyStatements" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import custom_role

customRole.CustomRolePolicyStatements(
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
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements.property.effect">effect</a></code> | <code>str</code> | Either `allow` or `deny`. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements.property.actions">actions</a></code> | <code>typing.List[str]</code> | The list of action specifiers defining the actions to which the statement applies. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | The list of action specifiers defining the actions to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | The list of resource specifiers defining the resources to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements.property.resources">resources</a></code> | <code>typing.List[str]</code> | The list of resource specifiers defining the resources to which the statement applies. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements.property.effect"></a>

```python
effect: str
```

- *Type:* str

Either `allow` or `deny`.

This argument defines whether the statement allows or denies access to the named resources and actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#effect CustomRole#effect}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of action specifiers defining the actions to which the statement applies.

Either `actions` or `not_actions` must be specified. For a list of available actions read [Actions reference](https://docs.launchdarkly.com/home/account-security/custom-roles/actions#actions-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#actions CustomRole#actions}

---

##### `not_actions`<sup>Optional</sup> <a name="not_actions" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of action specifiers defining the actions to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#not_actions CustomRole#not_actions}

---

##### `not_resources`<sup>Optional</sup> <a name="not_resources" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

The list of resource specifiers defining the resources to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#not_resources CustomRole#not_resources}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

The list of resource specifiers defining the resources to which the statement applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.21.5/docs/resources/custom_role#resources CustomRole#resources}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomRolePolicyList <a name="CustomRolePolicyList" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import custom_role

customRole.CustomRolePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomRolePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicy">CustomRolePolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CustomRolePolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicy">CustomRolePolicy</a>]]

---


### CustomRolePolicyOutputReference <a name="CustomRolePolicyOutputReference" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import custom_role

customRole.CustomRolePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicy">CustomRolePolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CustomRolePolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicy">CustomRolePolicy</a>]

---


### CustomRolePolicyStatementsList <a name="CustomRolePolicyStatementsList" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import custom_role

customRole.CustomRolePolicyStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomRolePolicyStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements">CustomRolePolicyStatements</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CustomRolePolicyStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements">CustomRolePolicyStatements</a>]]

---


### CustomRolePolicyStatementsOutputReference <a name="CustomRolePolicyStatementsOutputReference" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import custom_role

customRole.CustomRolePolicyStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.resetNotActions">reset_not_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.resetNotResources">reset_not_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_not_actions` <a name="reset_not_actions" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.resetNotActions"></a>

```python
def reset_not_actions() -> None
```

##### `reset_not_resources` <a name="reset_not_resources" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.resetNotResources"></a>

```python
def reset_not_resources() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.notActionsInput">not_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.notResourcesInput">not_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements">CustomRolePolicyStatements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `not_actions_input`<sup>Optional</sup> <a name="not_actions_input" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.notActionsInput"></a>

```python
not_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_resources_input`<sup>Optional</sup> <a name="not_resources_input" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.notResourcesInput"></a>

```python
not_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `not_actions`<sup>Required</sup> <a name="not_actions" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_resources`<sup>Required</sup> <a name="not_resources" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatementsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CustomRolePolicyStatements]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.customRole.CustomRolePolicyStatements">CustomRolePolicyStatements</a>]

---



