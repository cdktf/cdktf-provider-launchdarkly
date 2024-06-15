# `auditLogSubscription` Submodule <a name="`auditLogSubscription` Submodule" id="@cdktf/provider-launchdarkly.auditLogSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditLogSubscription <a name="AuditLogSubscription" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription launchdarkly_audit_log_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import audit_log_subscription

auditLogSubscription.AuditLogSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: typing.Mapping[str],
  integration_key: str,
  name: str,
  on: typing.Union[bool, IResolvable],
  statements: typing.Union[IResolvable, typing.List[AuditLogSubscriptionStatements]],
  id: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.config">config</a></code> | <code>typing.Mapping[str]</code> | The set of configuration fields corresponding to the value defined for `integration_key`. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.integrationKey">integration_key</a></code> | <code>str</code> | The integration key. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.name">name</a></code> | <code>str</code> | A human-friendly name for your audit log subscription viewable from within the LaunchDarkly Integrations page. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.on">on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not you want your subscription enabled, i.e. to actively send events. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.statements">statements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>]]</code> | statements block. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#id AuditLogSubscription#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags associated with your resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.config"></a>

- *Type:* typing.Mapping[str]

The set of configuration fields corresponding to the value defined for `integration_key`.

Refer to the `formVariables` field in the corresponding `integrations/<integration_key>/manifest.json` file in [this repo](https://github.com/launchdarkly/integration-framework/tree/master/integrations) for a full list of fields for the integration you wish to configure. **IMPORTANT**: Please note that Terraform will only accept these in snake case, regardless of the case shown in the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#config AuditLogSubscription#config}

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.integrationKey"></a>

- *Type:* str

The integration key.

Supported integration keys are `chronosphere`, `cloudtrail`, `datadog`, `dynatrace`, `elastic`, `grafana`, `honeycomb`, `logdna`, `msteams`, `new-relic-apm`, `signalfx`, `slack`, and `splunk`. A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#integration_key AuditLogSubscription#integration_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.name"></a>

- *Type:* str

A human-friendly name for your audit log subscription viewable from within the LaunchDarkly Integrations page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#name AuditLogSubscription#name}

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.on"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not you want your subscription enabled, i.e. to actively send events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#on AuditLogSubscription#on}

---

##### `statements`<sup>Required</sup> <a name="statements" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.statements"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>]]

statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#statements AuditLogSubscription#statements}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#id AuditLogSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#tags AuditLogSubscription#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.putStatements">put_statements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_statements` <a name="put_statements" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.putStatements"></a>

```python
def put_statements(
  value: typing.Union[IResolvable, typing.List[AuditLogSubscriptionStatements]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.putStatements.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AuditLogSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_launchdarkly import audit_log_subscription

auditLogSubscription.AuditLogSubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_launchdarkly import audit_log_subscription

auditLogSubscription.AuditLogSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_launchdarkly import audit_log_subscription

auditLogSubscription.AuditLogSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_launchdarkly import audit_log_subscription

auditLogSubscription.AuditLogSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AuditLogSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuditLogSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuditLogSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuditLogSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.statements">statements</a></code> | <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList">AuditLogSubscriptionStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.configInput">config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.integrationKeyInput">integration_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.onInput">on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.statementsInput">statements_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.config">config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.integrationKey">integration_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.on">on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `statements`<sup>Required</sup> <a name="statements" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.statements"></a>

```python
statements: AuditLogSubscriptionStatementsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList">AuditLogSubscriptionStatementsList</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.configInput"></a>

```python
config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_key_input`<sup>Optional</sup> <a name="integration_key_input" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.integrationKeyInput"></a>

```python
integration_key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `on_input`<sup>Optional</sup> <a name="on_input" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.onInput"></a>

```python
on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `statements_input`<sup>Optional</sup> <a name="statements_input" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.statementsInput"></a>

```python
statements_input: typing.Union[IResolvable, typing.List[AuditLogSubscriptionStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.on"></a>

```python
on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuditLogSubscriptionConfig <a name="AuditLogSubscriptionConfig" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import audit_log_subscription

auditLogSubscription.AuditLogSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: typing.Mapping[str],
  integration_key: str,
  name: str,
  on: typing.Union[bool, IResolvable],
  statements: typing.Union[IResolvable, typing.List[AuditLogSubscriptionStatements]],
  id: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.config">config</a></code> | <code>typing.Mapping[str]</code> | The set of configuration fields corresponding to the value defined for `integration_key`. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.integrationKey">integration_key</a></code> | <code>str</code> | The integration key. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.name">name</a></code> | <code>str</code> | A human-friendly name for your audit log subscription viewable from within the LaunchDarkly Integrations page. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.on">on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not you want your subscription enabled, i.e. to actively send events. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.statements">statements</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>]]</code> | statements block. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#id AuditLogSubscription#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags associated with your resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The set of configuration fields corresponding to the value defined for `integration_key`.

Refer to the `formVariables` field in the corresponding `integrations/<integration_key>/manifest.json` file in [this repo](https://github.com/launchdarkly/integration-framework/tree/master/integrations) for a full list of fields for the integration you wish to configure. **IMPORTANT**: Please note that Terraform will only accept these in snake case, regardless of the case shown in the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#config AuditLogSubscription#config}

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

The integration key.

Supported integration keys are `chronosphere`, `cloudtrail`, `datadog`, `dynatrace`, `elastic`, `grafana`, `honeycomb`, `logdna`, `msteams`, `new-relic-apm`, `signalfx`, `slack`, and `splunk`. A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#integration_key AuditLogSubscription#integration_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A human-friendly name for your audit log subscription viewable from within the LaunchDarkly Integrations page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#name AuditLogSubscription#name}

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.on"></a>

```python
on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not you want your subscription enabled, i.e. to actively send events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#on AuditLogSubscription#on}

---

##### `statements`<sup>Required</sup> <a name="statements" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.statements"></a>

```python
statements: typing.Union[IResolvable, typing.List[AuditLogSubscriptionStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>]]

statements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#statements AuditLogSubscription#statements}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#id AuditLogSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#tags AuditLogSubscription#tags}

---

### AuditLogSubscriptionStatements <a name="AuditLogSubscriptionStatements" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import audit_log_subscription

auditLogSubscription.AuditLogSubscriptionStatements(
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
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.effect">effect</a></code> | <code>str</code> | Either `allow` or `deny`. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.actions">actions</a></code> | <code>typing.List[str]</code> | The list of action specifiers defining the actions to which the statement applies. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | The list of action specifiers defining the actions to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | The list of resource specifiers defining the resources to which the statement does not apply. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.resources">resources</a></code> | <code>typing.List[str]</code> | The list of resource specifiers defining the resources to which the statement applies. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.effect"></a>

```python
effect: str
```

- *Type:* str

Either `allow` or `deny`.

This argument defines whether the statement allows or denies access to the named resources and actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#effect AuditLogSubscription#effect}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of action specifiers defining the actions to which the statement applies.

Either `actions` or `not_actions` must be specified. For a list of available actions read [Actions reference](https://docs.launchdarkly.com/home/account-security/custom-roles/actions#actions-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#actions AuditLogSubscription#actions}

---

##### `not_actions`<sup>Optional</sup> <a name="not_actions" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of action specifiers defining the actions to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#not_actions AuditLogSubscription#not_actions}

---

##### `not_resources`<sup>Optional</sup> <a name="not_resources" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

The list of resource specifiers defining the resources to which the statement does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#not_resources AuditLogSubscription#not_resources}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

The list of resource specifiers defining the resources to which the statement applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.19.0/docs/resources/audit_log_subscription#resources AuditLogSubscription#resources}

---

## Classes <a name="Classes" id="Classes"></a>

### AuditLogSubscriptionStatementsList <a name="AuditLogSubscriptionStatementsList" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import audit_log_subscription

auditLogSubscription.AuditLogSubscriptionStatementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditLogSubscriptionStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AuditLogSubscriptionStatements]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>]]

---


### AuditLogSubscriptionStatementsOutputReference <a name="AuditLogSubscriptionStatementsOutputReference" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import audit_log_subscription

auditLogSubscription.AuditLogSubscriptionStatementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetNotActions">reset_not_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetNotResources">reset_not_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_not_actions` <a name="reset_not_actions" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetNotActions"></a>

```python
def reset_not_actions() -> None
```

##### `reset_not_resources` <a name="reset_not_resources" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetNotResources"></a>

```python
def reset_not_resources() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notActionsInput">not_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notResourcesInput">not_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `not_actions_input`<sup>Optional</sup> <a name="not_actions_input" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notActionsInput"></a>

```python
not_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_resources_input`<sup>Optional</sup> <a name="not_resources_input" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notResourcesInput"></a>

```python
not_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `not_actions`<sup>Required</sup> <a name="not_actions" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_resources`<sup>Required</sup> <a name="not_resources" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatementsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AuditLogSubscriptionStatements]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.auditLogSubscription.AuditLogSubscriptionStatements">AuditLogSubscriptionStatements</a>]

---



