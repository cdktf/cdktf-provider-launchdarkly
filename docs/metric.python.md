# `metric` Submodule <a name="`metric` Submodule" id="@cdktf/provider-launchdarkly.metric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Metric <a name="Metric" id="@cdktf/provider-launchdarkly.metric.Metric"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric launchdarkly_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import metric

metric.Metric(
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
  kind: str,
  name: str,
  project_key: str,
  description: str = None,
  event_key: str = None,
  id: str = None,
  is_active: typing.Union[bool, IResolvable] = None,
  is_numeric: typing.Union[bool, IResolvable] = None,
  maintainer_id: str = None,
  randomization_units: typing.List[str] = None,
  selector: str = None,
  success_criteria: str = None,
  tags: typing.List[str] = None,
  unit: str = None,
  urls: typing.Union[IResolvable, typing.List[MetricUrls]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.key">key</a></code> | <code>str</code> | A unique key that will be used to reference the metric in your code. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.kind">kind</a></code> | <code>str</code> | The metric type -available choices are 'pageview', 'click', and 'custom'. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.name">name</a></code> | <code>str</code> | A human-readable name for your metric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.projectKey">project_key</a></code> | <code>str</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.description">description</a></code> | <code>str</code> | A short description of what the metric will be used for. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.eventKey">event_key</a></code> | <code>str</code> | The event key for your metric (if custom metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#id Metric#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the metric is active. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.isNumeric">is_numeric</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the metric is numeric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.maintainerId">maintainer_id</a></code> | <code>str</code> | The LaunchDarkly ID of the user who will maintain the metric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.randomizationUnits">randomization_units</a></code> | <code>typing.List[str]</code> | A set of one or more context kinds that this metric can measure events from. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.selector">selector</a></code> | <code>str</code> | The CSS selector for your metric (if click metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.successCriteria">success_criteria</a></code> | <code>str</code> | The success criteria for your metric (if numeric metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.unit">unit</a></code> | <code>str</code> | The unit for your metric (if numeric metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.urls">urls</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>]]</code> | urls block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.key"></a>

- *Type:* str

A unique key that will be used to reference the metric in your code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#key Metric#key}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.kind"></a>

- *Type:* str

The metric type -available choices are 'pageview', 'click', and 'custom'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#kind Metric#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.name"></a>

- *Type:* str

A human-readable name for your metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#name Metric#name}

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.projectKey"></a>

- *Type:* str

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#project_key Metric#project_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.description"></a>

- *Type:* str

A short description of what the metric will be used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#description Metric#description}

---

##### `event_key`<sup>Optional</sup> <a name="event_key" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.eventKey"></a>

- *Type:* str

The event key for your metric (if custom metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#event_key Metric#event_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#id Metric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_active`<sup>Optional</sup> <a name="is_active" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.isActive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the metric is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#is_active Metric#is_active}

---

##### `is_numeric`<sup>Optional</sup> <a name="is_numeric" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.isNumeric"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the metric is numeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#is_numeric Metric#is_numeric}

---

##### `maintainer_id`<sup>Optional</sup> <a name="maintainer_id" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.maintainerId"></a>

- *Type:* str

The LaunchDarkly ID of the user who will maintain the metric.

If not set, the API will automatically apply the member associated with your Terraform API key or the most recently-set maintainer

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#maintainer_id Metric#maintainer_id}

---

##### `randomization_units`<sup>Optional</sup> <a name="randomization_units" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.randomizationUnits"></a>

- *Type:* typing.List[str]

A set of one or more context kinds that this metric can measure events from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#randomization_units Metric#randomization_units}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.selector"></a>

- *Type:* str

The CSS selector for your metric (if click metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#selector Metric#selector}

---

##### `success_criteria`<sup>Optional</sup> <a name="success_criteria" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.successCriteria"></a>

- *Type:* str

The success criteria for your metric (if numeric metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#success_criteria Metric#success_criteria}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#tags Metric#tags}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.unit"></a>

- *Type:* str

The unit for your metric (if numeric metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#unit Metric#unit}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.urls"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>]]

urls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#urls Metric#urls}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.putUrls">put_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetEventKey">reset_event_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetIsActive">reset_is_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetIsNumeric">reset_is_numeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetMaintainerId">reset_maintainer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetRandomizationUnits">reset_randomization_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetSelector">reset_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetSuccessCriteria">reset_success_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetUnit">reset_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetUrls">reset_urls</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.metric.Metric.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-launchdarkly.metric.Metric.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.metric.Metric.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.metric.Metric.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-launchdarkly.metric.Metric.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-launchdarkly.metric.Metric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-launchdarkly.metric.Metric.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-launchdarkly.metric.Metric.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-launchdarkly.metric.Metric.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-launchdarkly.metric.Metric.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-launchdarkly.metric.Metric.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-launchdarkly.metric.Metric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-launchdarkly.metric.Metric.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-launchdarkly.metric.Metric.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.metric.Metric.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.Metric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-launchdarkly.metric.Metric.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-launchdarkly.metric.Metric.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-launchdarkly.metric.Metric.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.metric.Metric.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-launchdarkly.metric.Metric.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_urls` <a name="put_urls" id="@cdktf/provider-launchdarkly.metric.Metric.putUrls"></a>

```python
def put_urls(
  value: typing.Union[IResolvable, typing.List[MetricUrls]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.metric.Metric.putUrls.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-launchdarkly.metric.Metric.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_event_key` <a name="reset_event_key" id="@cdktf/provider-launchdarkly.metric.Metric.resetEventKey"></a>

```python
def reset_event_key() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-launchdarkly.metric.Metric.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_active` <a name="reset_is_active" id="@cdktf/provider-launchdarkly.metric.Metric.resetIsActive"></a>

```python
def reset_is_active() -> None
```

##### `reset_is_numeric` <a name="reset_is_numeric" id="@cdktf/provider-launchdarkly.metric.Metric.resetIsNumeric"></a>

```python
def reset_is_numeric() -> None
```

##### `reset_maintainer_id` <a name="reset_maintainer_id" id="@cdktf/provider-launchdarkly.metric.Metric.resetMaintainerId"></a>

```python
def reset_maintainer_id() -> None
```

##### `reset_randomization_units` <a name="reset_randomization_units" id="@cdktf/provider-launchdarkly.metric.Metric.resetRandomizationUnits"></a>

```python
def reset_randomization_units() -> None
```

##### `reset_selector` <a name="reset_selector" id="@cdktf/provider-launchdarkly.metric.Metric.resetSelector"></a>

```python
def reset_selector() -> None
```

##### `reset_success_criteria` <a name="reset_success_criteria" id="@cdktf/provider-launchdarkly.metric.Metric.resetSuccessCriteria"></a>

```python
def reset_success_criteria() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-launchdarkly.metric.Metric.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-launchdarkly.metric.Metric.resetUnit"></a>

```python
def reset_unit() -> None
```

##### `reset_urls` <a name="reset_urls" id="@cdktf/provider-launchdarkly.metric.Metric.resetUrls"></a>

```python
def reset_urls() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Metric resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-launchdarkly.metric.Metric.isConstruct"></a>

```python
from cdktf_cdktf_provider_launchdarkly import metric

metric.Metric.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.metric.Metric.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_launchdarkly import metric

metric.Metric.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_launchdarkly import metric

metric.Metric.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_launchdarkly import metric

metric.Metric.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Metric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Metric to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Metric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Metric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.urls">urls</a></code> | <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList">MetricUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.eventKeyInput">event_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isActiveInput">is_active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isNumericInput">is_numeric_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.maintainerIdInput">maintainer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.projectKeyInput">project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnitsInput">randomization_units_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.successCriteriaInput">success_criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.urlsInput">urls_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.eventKey">event_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isNumeric">is_numeric</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.maintainerId">maintainer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnits">randomization_units</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.successCriteria">success_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.unit">unit</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.metric.Metric.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-launchdarkly.metric.Metric.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.metric.Metric.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-launchdarkly.metric.Metric.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-launchdarkly.metric.Metric.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-launchdarkly.metric.Metric.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-launchdarkly.metric.Metric.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.metric.Metric.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.metric.Metric.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.metric.Metric.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.metric.Metric.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.metric.Metric.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.metric.Metric.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.metric.Metric.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-launchdarkly.metric.Metric.property.urls"></a>

```python
urls: MetricUrlsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList">MetricUrlsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `event_key_input`<sup>Optional</sup> <a name="event_key_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.eventKeyInput"></a>

```python
event_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_active_input`<sup>Optional</sup> <a name="is_active_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.isActiveInput"></a>

```python
is_active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_numeric_input`<sup>Optional</sup> <a name="is_numeric_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.isNumericInput"></a>

```python
is_numeric_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `maintainer_id_input`<sup>Optional</sup> <a name="maintainer_id_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.maintainerIdInput"></a>

```python
maintainer_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_key_input`<sup>Optional</sup> <a name="project_key_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.projectKeyInput"></a>

```python
project_key_input: str
```

- *Type:* str

---

##### `randomization_units_input`<sup>Optional</sup> <a name="randomization_units_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnitsInput"></a>

```python
randomization_units_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `success_criteria_input`<sup>Optional</sup> <a name="success_criteria_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.successCriteriaInput"></a>

```python
success_criteria_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `urls_input`<sup>Optional</sup> <a name="urls_input" id="@cdktf/provider-launchdarkly.metric.Metric.property.urlsInput"></a>

```python
urls_input: typing.Union[IResolvable, typing.List[MetricUrls]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.metric.Metric.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `event_key`<sup>Required</sup> <a name="event_key" id="@cdktf/provider-launchdarkly.metric.Metric.property.eventKey"></a>

```python
event_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="@cdktf/provider-launchdarkly.metric.Metric.property.isActive"></a>

```python
is_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_numeric`<sup>Required</sup> <a name="is_numeric" id="@cdktf/provider-launchdarkly.metric.Metric.property.isNumeric"></a>

```python
is_numeric: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.metric.Metric.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-launchdarkly.metric.Metric.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `maintainer_id`<sup>Required</sup> <a name="maintainer_id" id="@cdktf/provider-launchdarkly.metric.Metric.property.maintainerId"></a>

```python
maintainer_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.metric.Metric.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-launchdarkly.metric.Metric.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

##### `randomization_units`<sup>Required</sup> <a name="randomization_units" id="@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnits"></a>

```python
randomization_units: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-launchdarkly.metric.Metric.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `success_criteria`<sup>Required</sup> <a name="success_criteria" id="@cdktf/provider-launchdarkly.metric.Metric.property.successCriteria"></a>

```python
success_criteria: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.metric.Metric.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-launchdarkly.metric.Metric.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.metric.Metric.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MetricConfig <a name="MetricConfig" id="@cdktf/provider-launchdarkly.metric.MetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.metric.MetricConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import metric

metric.MetricConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  kind: str,
  name: str,
  project_key: str,
  description: str = None,
  event_key: str = None,
  id: str = None,
  is_active: typing.Union[bool, IResolvable] = None,
  is_numeric: typing.Union[bool, IResolvable] = None,
  maintainer_id: str = None,
  randomization_units: typing.List[str] = None,
  selector: str = None,
  success_criteria: str = None,
  tags: typing.List[str] = None,
  unit: str = None,
  urls: typing.Union[IResolvable, typing.List[MetricUrls]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.key">key</a></code> | <code>str</code> | A unique key that will be used to reference the metric in your code. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.kind">kind</a></code> | <code>str</code> | The metric type -available choices are 'pageview', 'click', and 'custom'. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.name">name</a></code> | <code>str</code> | A human-readable name for your metric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.projectKey">project_key</a></code> | <code>str</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.description">description</a></code> | <code>str</code> | A short description of what the metric will be used for. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.eventKey">event_key</a></code> | <code>str</code> | The event key for your metric (if custom metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#id Metric#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the metric is active. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.isNumeric">is_numeric</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the metric is numeric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.maintainerId">maintainer_id</a></code> | <code>str</code> | The LaunchDarkly ID of the user who will maintain the metric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.randomizationUnits">randomization_units</a></code> | <code>typing.List[str]</code> | A set of one or more context kinds that this metric can measure events from. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.selector">selector</a></code> | <code>str</code> | The CSS selector for your metric (if click metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.successCriteria">success_criteria</a></code> | <code>str</code> | The success criteria for your metric (if numeric metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.unit">unit</a></code> | <code>str</code> | The unit for your metric (if numeric metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.urls">urls</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>]]</code> | urls block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.key"></a>

```python
key: str
```

- *Type:* str

A unique key that will be used to reference the metric in your code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#key Metric#key}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

The metric type -available choices are 'pageview', 'click', and 'custom'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#kind Metric#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A human-readable name for your metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#name Metric#name}

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#project_key Metric#project_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A short description of what the metric will be used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#description Metric#description}

---

##### `event_key`<sup>Optional</sup> <a name="event_key" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.eventKey"></a>

```python
event_key: str
```

- *Type:* str

The event key for your metric (if custom metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#event_key Metric#event_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#id Metric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_active`<sup>Optional</sup> <a name="is_active" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.isActive"></a>

```python
is_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the metric is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#is_active Metric#is_active}

---

##### `is_numeric`<sup>Optional</sup> <a name="is_numeric" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.isNumeric"></a>

```python
is_numeric: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the metric is numeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#is_numeric Metric#is_numeric}

---

##### `maintainer_id`<sup>Optional</sup> <a name="maintainer_id" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.maintainerId"></a>

```python
maintainer_id: str
```

- *Type:* str

The LaunchDarkly ID of the user who will maintain the metric.

If not set, the API will automatically apply the member associated with your Terraform API key or the most recently-set maintainer

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#maintainer_id Metric#maintainer_id}

---

##### `randomization_units`<sup>Optional</sup> <a name="randomization_units" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.randomizationUnits"></a>

```python
randomization_units: typing.List[str]
```

- *Type:* typing.List[str]

A set of one or more context kinds that this metric can measure events from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#randomization_units Metric#randomization_units}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.selector"></a>

```python
selector: str
```

- *Type:* str

The CSS selector for your metric (if click metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#selector Metric#selector}

---

##### `success_criteria`<sup>Optional</sup> <a name="success_criteria" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.successCriteria"></a>

```python
success_criteria: str
```

- *Type:* str

The success criteria for your metric (if numeric metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#success_criteria Metric#success_criteria}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#tags Metric#tags}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.unit"></a>

```python
unit: str
```

- *Type:* str

The unit for your metric (if numeric metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#unit Metric#unit}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.urls"></a>

```python
urls: typing.Union[IResolvable, typing.List[MetricUrls]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>]]

urls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#urls Metric#urls}

---

### MetricUrls <a name="MetricUrls" id="@cdktf/provider-launchdarkly.metric.MetricUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.metric.MetricUrls.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import metric

metric.MetricUrls(
  kind: str,
  pattern: str = None,
  substring: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.kind">kind</a></code> | <code>str</code> | The url type - available choices are 'exact', 'canonical', 'substring' and 'regex'. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.pattern">pattern</a></code> | <code>str</code> | The URL-matching regex. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.substring">substring</a></code> | <code>str</code> | The URL substring. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.url">url</a></code> | <code>str</code> | The exact or canonical URL. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.kind"></a>

```python
kind: str
```

- *Type:* str

The url type - available choices are 'exact', 'canonical', 'substring' and 'regex'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#kind Metric#kind}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

The URL-matching regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#pattern Metric#pattern}

---

##### `substring`<sup>Optional</sup> <a name="substring" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.substring"></a>

```python
substring: str
```

- *Type:* str

The URL substring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#substring Metric#substring}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.url"></a>

```python
url: str
```

- *Type:* str

The exact or canonical URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.3/docs/resources/metric#url Metric#url}

---

## Classes <a name="Classes" id="Classes"></a>

### MetricUrlsList <a name="MetricUrlsList" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import metric

metric.MetricUrlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MetricUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MetricUrls]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>]]

---


### MetricUrlsOutputReference <a name="MetricUrlsOutputReference" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import metric

metric.MetricUrlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetPattern">reset_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetSubstring">reset_substring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pattern` <a name="reset_pattern" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetPattern"></a>

```python
def reset_pattern() -> None
```

##### `reset_substring` <a name="reset_substring" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetSubstring"></a>

```python
def reset_substring() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substringInput">substring_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substring">substring</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `substring_input`<sup>Optional</sup> <a name="substring_input" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substringInput"></a>

```python
substring_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `substring`<sup>Required</sup> <a name="substring" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substring"></a>

```python
substring: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MetricUrls]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>]

---



