# `featureFlagEnvironment` Submodule <a name="`featureFlagEnvironment` Submodule" id="@cdktf/provider-launchdarkly.featureFlagEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureFlagEnvironment <a name="FeatureFlagEnvironment" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment launchdarkly_feature_flag_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironment(
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
  fallthrough: FeatureFlagEnvironmentFallthrough,
  flag_id: str,
  off_variation: typing.Union[int, float],
  context_targets: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentContextTargets]] = None,
  id: str = None,
  on: typing.Union[bool, IResolvable] = None,
  prerequisites: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentPrerequisites]] = None,
  rules: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentRules]] = None,
  targets: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentTargets]] = None,
  track_events: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.envKey">env_key</a></code> | <code>str</code> | The environment key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.fallthrough">fallthrough</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a></code> | fallthrough block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.flagId">flag_id</a></code> | <code>str</code> | The feature flag's unique `id` in the format `project_key/flag_key`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.offVariation">off_variation</a></code> | <code>typing.Union[int, float]</code> | The index of the variation to serve if targeting is disabled. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.contextTargets">context_targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>]]</code> | context_targets block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#id FeatureFlagEnvironment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.on">on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether targeting is enabled. Defaults to `false` if not set. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.prerequisites">prerequisites</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>]]</code> | prerequisites block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.targets">targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>]]</code> | targets block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.trackEvents">track_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to send event data back to LaunchDarkly. Defaults to `false` if not set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env_key`<sup>Required</sup> <a name="env_key" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.envKey"></a>

- *Type:* str

The environment key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#env_key FeatureFlagEnvironment#env_key}

---

##### `fallthrough`<sup>Required</sup> <a name="fallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.fallthrough"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

fallthrough block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#fallthrough FeatureFlagEnvironment#fallthrough}

---

##### `flag_id`<sup>Required</sup> <a name="flag_id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.flagId"></a>

- *Type:* str

The feature flag's unique `id` in the format `project_key/flag_key`.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#flag_id FeatureFlagEnvironment#flag_id}

---

##### `off_variation`<sup>Required</sup> <a name="off_variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.offVariation"></a>

- *Type:* typing.Union[int, float]

The index of the variation to serve if targeting is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#off_variation FeatureFlagEnvironment#off_variation}

---

##### `context_targets`<sup>Optional</sup> <a name="context_targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.contextTargets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>]]

context_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#context_targets FeatureFlagEnvironment#context_targets}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#id FeatureFlagEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on`<sup>Optional</sup> <a name="on" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.on"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether targeting is enabled. Defaults to `false` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#on FeatureFlagEnvironment#on}

---

##### `prerequisites`<sup>Optional</sup> <a name="prerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.prerequisites"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>]]

prerequisites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#prerequisites FeatureFlagEnvironment#prerequisites}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#rules FeatureFlagEnvironment#rules}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.targets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>]]

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#targets FeatureFlagEnvironment#targets}

---

##### `track_events`<sup>Optional</sup> <a name="track_events" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.trackEvents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to send event data back to LaunchDarkly. Defaults to `false` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#track_events FeatureFlagEnvironment#track_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putContextTargets">put_context_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putFallthrough">put_fallthrough</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putPrerequisites">put_prerequisites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetContextTargets">reset_context_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetOn">reset_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetPrerequisites">reset_prerequisites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetTargets">reset_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetTrackEvents">reset_track_events</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_context_targets` <a name="put_context_targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putContextTargets"></a>

```python
def put_context_targets(
  value: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentContextTargets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putContextTargets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>]]

---

##### `put_fallthrough` <a name="put_fallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putFallthrough"></a>

```python
def put_fallthrough(
  bucket_by: str = None,
  context_kind: str = None,
  rollout_weights: typing.List[typing.Union[int, float]] = None,
  variation: typing.Union[int, float] = None
) -> None
```

###### `bucket_by`<sup>Optional</sup> <a name="bucket_by" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putFallthrough.parameter.bucketBy"></a>

- *Type:* str

Group percentage rollout by a custom attribute. This argument is only valid if rollout_weights is also specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#bucket_by FeatureFlagEnvironment#bucket_by}

---

###### `context_kind`<sup>Optional</sup> <a name="context_kind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putFallthrough.parameter.contextKind"></a>

- *Type:* str

The context kind associated with the specified rollout.

This argument is only valid if rollout_weights is also specified. If omitted, defaults to `user`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}

---

###### `rollout_weights`<sup>Optional</sup> <a name="rollout_weights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putFallthrough.parameter.rolloutWeights"></a>

- *Type:* typing.List[typing.Union[int, float]]

List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`.

The sum of the `rollout_weights` must equal 100000 and the number of rollout weights specified in the array must match the number of flag variations. You must specify either `variation` or `rollout_weights`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#rollout_weights FeatureFlagEnvironment#rollout_weights}

---

###### `variation`<sup>Optional</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putFallthrough.parameter.variation"></a>

- *Type:* typing.Union[int, float]

The default integer variation index to serve if no `prerequisites`, `target`, or `rules` apply.

You must specify either `variation` or `rollout_weights`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

##### `put_prerequisites` <a name="put_prerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putPrerequisites"></a>

```python
def put_prerequisites(
  value: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentPrerequisites]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putPrerequisites.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>]]

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>]]

---

##### `put_targets` <a name="put_targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putTargets"></a>

```python
def put_targets(
  value: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentTargets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putTargets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>]]

---

##### `reset_context_targets` <a name="reset_context_targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetContextTargets"></a>

```python
def reset_context_targets() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_on` <a name="reset_on" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetOn"></a>

```python
def reset_on() -> None
```

##### `reset_prerequisites` <a name="reset_prerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetPrerequisites"></a>

```python
def reset_prerequisites() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_targets` <a name="reset_targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetTargets"></a>

```python
def reset_targets() -> None
```

##### `reset_track_events` <a name="reset_track_events" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetTrackEvents"></a>

```python
def reset_track_events() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FeatureFlagEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FeatureFlagEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FeatureFlagEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FeatureFlagEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FeatureFlagEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargets">context_targets</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList">FeatureFlagEnvironmentContextTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthrough">fallthrough</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference">FeatureFlagEnvironmentFallthroughOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisites">prerequisites</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList">FeatureFlagEnvironmentPrerequisitesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList">FeatureFlagEnvironmentRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList">FeatureFlagEnvironmentTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargetsInput">context_targets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKeyInput">env_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthroughInput">fallthrough_input</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagIdInput">flag_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariationInput">off_variation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.onInput">on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisitesInput">prerequisites_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targetsInput">targets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEventsInput">track_events_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKey">env_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagId">flag_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariation">off_variation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.on">on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEvents">track_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `context_targets`<sup>Required</sup> <a name="context_targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargets"></a>

```python
context_targets: FeatureFlagEnvironmentContextTargetsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList">FeatureFlagEnvironmentContextTargetsList</a>

---

##### `fallthrough`<sup>Required</sup> <a name="fallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthrough"></a>

```python
fallthrough: FeatureFlagEnvironmentFallthroughOutputReference
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference">FeatureFlagEnvironmentFallthroughOutputReference</a>

---

##### `prerequisites`<sup>Required</sup> <a name="prerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisites"></a>

```python
prerequisites: FeatureFlagEnvironmentPrerequisitesList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList">FeatureFlagEnvironmentPrerequisitesList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rules"></a>

```python
rules: FeatureFlagEnvironmentRulesList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList">FeatureFlagEnvironmentRulesList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targets"></a>

```python
targets: FeatureFlagEnvironmentTargetsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList">FeatureFlagEnvironmentTargetsList</a>

---

##### `context_targets_input`<sup>Optional</sup> <a name="context_targets_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargetsInput"></a>

```python
context_targets_input: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentContextTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>]]

---

##### `env_key_input`<sup>Optional</sup> <a name="env_key_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKeyInput"></a>

```python
env_key_input: str
```

- *Type:* str

---

##### `fallthrough_input`<sup>Optional</sup> <a name="fallthrough_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthroughInput"></a>

```python
fallthrough_input: FeatureFlagEnvironmentFallthrough
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

---

##### `flag_id_input`<sup>Optional</sup> <a name="flag_id_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagIdInput"></a>

```python
flag_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `off_variation_input`<sup>Optional</sup> <a name="off_variation_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariationInput"></a>

```python
off_variation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `on_input`<sup>Optional</sup> <a name="on_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.onInput"></a>

```python
on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prerequisites_input`<sup>Optional</sup> <a name="prerequisites_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisitesInput"></a>

```python
prerequisites_input: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentPrerequisites]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>]]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>]]

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targetsInput"></a>

```python
targets_input: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>]]

---

##### `track_events_input`<sup>Optional</sup> <a name="track_events_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEventsInput"></a>

```python
track_events_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `env_key`<sup>Required</sup> <a name="env_key" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKey"></a>

```python
env_key: str
```

- *Type:* str

---

##### `flag_id`<sup>Required</sup> <a name="flag_id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagId"></a>

```python
flag_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `off_variation`<sup>Required</sup> <a name="off_variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariation"></a>

```python
off_variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.on"></a>

```python
on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `track_events`<sup>Required</sup> <a name="track_events" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEvents"></a>

```python
track_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureFlagEnvironmentConfig <a name="FeatureFlagEnvironmentConfig" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  env_key: str,
  fallthrough: FeatureFlagEnvironmentFallthrough,
  flag_id: str,
  off_variation: typing.Union[int, float],
  context_targets: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentContextTargets]] = None,
  id: str = None,
  on: typing.Union[bool, IResolvable] = None,
  prerequisites: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentPrerequisites]] = None,
  rules: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentRules]] = None,
  targets: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentTargets]] = None,
  track_events: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.envKey">env_key</a></code> | <code>str</code> | The environment key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.fallthrough">fallthrough</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a></code> | fallthrough block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.flagId">flag_id</a></code> | <code>str</code> | The feature flag's unique `id` in the format `project_key/flag_key`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.offVariation">off_variation</a></code> | <code>typing.Union[int, float]</code> | The index of the variation to serve if targeting is disabled. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.contextTargets">context_targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>]]</code> | context_targets block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#id FeatureFlagEnvironment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.on">on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether targeting is enabled. Defaults to `false` if not set. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.prerequisites">prerequisites</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>]]</code> | prerequisites block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.targets">targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>]]</code> | targets block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.trackEvents">track_events</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to send event data back to LaunchDarkly. Defaults to `false` if not set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `env_key`<sup>Required</sup> <a name="env_key" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.envKey"></a>

```python
env_key: str
```

- *Type:* str

The environment key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#env_key FeatureFlagEnvironment#env_key}

---

##### `fallthrough`<sup>Required</sup> <a name="fallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.fallthrough"></a>

```python
fallthrough: FeatureFlagEnvironmentFallthrough
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

fallthrough block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#fallthrough FeatureFlagEnvironment#fallthrough}

---

##### `flag_id`<sup>Required</sup> <a name="flag_id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.flagId"></a>

```python
flag_id: str
```

- *Type:* str

The feature flag's unique `id` in the format `project_key/flag_key`.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#flag_id FeatureFlagEnvironment#flag_id}

---

##### `off_variation`<sup>Required</sup> <a name="off_variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.offVariation"></a>

```python
off_variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The index of the variation to serve if targeting is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#off_variation FeatureFlagEnvironment#off_variation}

---

##### `context_targets`<sup>Optional</sup> <a name="context_targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.contextTargets"></a>

```python
context_targets: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentContextTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>]]

context_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#context_targets FeatureFlagEnvironment#context_targets}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#id FeatureFlagEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on`<sup>Optional</sup> <a name="on" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.on"></a>

```python
on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether targeting is enabled. Defaults to `false` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#on FeatureFlagEnvironment#on}

---

##### `prerequisites`<sup>Optional</sup> <a name="prerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.prerequisites"></a>

```python
prerequisites: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentPrerequisites]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>]]

prerequisites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#prerequisites FeatureFlagEnvironment#prerequisites}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#rules FeatureFlagEnvironment#rules}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.targets"></a>

```python
targets: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>]]

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#targets FeatureFlagEnvironment#targets}

---

##### `track_events`<sup>Optional</sup> <a name="track_events" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.trackEvents"></a>

```python
track_events: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to send event data back to LaunchDarkly. Defaults to `false` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#track_events FeatureFlagEnvironment#track_events}

---

### FeatureFlagEnvironmentContextTargets <a name="FeatureFlagEnvironmentContextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentContextTargets(
  context_kind: str,
  values: typing.List[str],
  variation: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.contextKind">context_kind</a></code> | <code>str</code> | The context kind on which the flag should target in this environment. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.values">values</a></code> | <code>typing.List[str]</code> | List of `user` strings to target. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.variation">variation</a></code> | <code>typing.Union[int, float]</code> | The index of the variation to serve if a user target value is matched. |

---

##### `context_kind`<sup>Required</sup> <a name="context_kind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.contextKind"></a>

```python
context_kind: str
```

- *Type:* str

The context kind on which the flag should target in this environment.

User (`user`) targets should be specified as `targets` attribute blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

List of `user` strings to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.variation"></a>

```python
variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The index of the variation to serve if a user target value is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentFallthrough <a name="FeatureFlagEnvironmentFallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentFallthrough(
  bucket_by: str = None,
  context_kind: str = None,
  rollout_weights: typing.List[typing.Union[int, float]] = None,
  variation: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.bucketBy">bucket_by</a></code> | <code>str</code> | Group percentage rollout by a custom attribute. This argument is only valid if rollout_weights is also specified. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.contextKind">context_kind</a></code> | <code>str</code> | The context kind associated with the specified rollout. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.rolloutWeights">rollout_weights</a></code> | <code>typing.List[typing.Union[int, float]]</code> | List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.variation">variation</a></code> | <code>typing.Union[int, float]</code> | The default integer variation index to serve if no `prerequisites`, `target`, or `rules` apply. |

---

##### `bucket_by`<sup>Optional</sup> <a name="bucket_by" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.bucketBy"></a>

```python
bucket_by: str
```

- *Type:* str

Group percentage rollout by a custom attribute. This argument is only valid if rollout_weights is also specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#bucket_by FeatureFlagEnvironment#bucket_by}

---

##### `context_kind`<sup>Optional</sup> <a name="context_kind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.contextKind"></a>

```python
context_kind: str
```

- *Type:* str

The context kind associated with the specified rollout.

This argument is only valid if rollout_weights is also specified. If omitted, defaults to `user`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}

---

##### `rollout_weights`<sup>Optional</sup> <a name="rollout_weights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.rolloutWeights"></a>

```python
rollout_weights: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`.

The sum of the `rollout_weights` must equal 100000 and the number of rollout weights specified in the array must match the number of flag variations. You must specify either `variation` or `rollout_weights`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#rollout_weights FeatureFlagEnvironment#rollout_weights}

---

##### `variation`<sup>Optional</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.variation"></a>

```python
variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default integer variation index to serve if no `prerequisites`, `target`, or `rules` apply.

You must specify either `variation` or `rollout_weights`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentPrerequisites <a name="FeatureFlagEnvironmentPrerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites(
  flag_key: str,
  variation: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.flagKey">flag_key</a></code> | <code>str</code> | The prerequisite feature flag's `key`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.variation">variation</a></code> | <code>typing.Union[int, float]</code> | The index of the prerequisite feature flag's variation to target. |

---

##### `flag_key`<sup>Required</sup> <a name="flag_key" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.flagKey"></a>

```python
flag_key: str
```

- *Type:* str

The prerequisite feature flag's `key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#flag_key FeatureFlagEnvironment#flag_key}

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.variation"></a>

```python
variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The index of the prerequisite feature flag's variation to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentRules <a name="FeatureFlagEnvironmentRules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentRules(
  bucket_by: str = None,
  clauses: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentRulesClauses]] = None,
  description: str = None,
  rollout_weights: typing.List[typing.Union[int, float]] = None,
  variation: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.bucketBy">bucket_by</a></code> | <code>str</code> | Group percentage rollout by a custom attribute. This argument is only valid if `rollout_weights` is also specified. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.clauses">clauses</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>]]</code> | clauses block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.description">description</a></code> | <code>str</code> | A human-readable description of the targeting rule. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.rolloutWeights">rollout_weights</a></code> | <code>typing.List[typing.Union[int, float]]</code> | List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.variation">variation</a></code> | <code>typing.Union[int, float]</code> | The integer variation index to serve if the rule clauses evaluate to `true`. |

---

##### `bucket_by`<sup>Optional</sup> <a name="bucket_by" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.bucketBy"></a>

```python
bucket_by: str
```

- *Type:* str

Group percentage rollout by a custom attribute. This argument is only valid if `rollout_weights` is also specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#bucket_by FeatureFlagEnvironment#bucket_by}

---

##### `clauses`<sup>Optional</sup> <a name="clauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.clauses"></a>

```python
clauses: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentRulesClauses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>]]

clauses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#clauses FeatureFlagEnvironment#clauses}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the targeting rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#description FeatureFlagEnvironment#description}

---

##### `rollout_weights`<sup>Optional</sup> <a name="rollout_weights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.rolloutWeights"></a>

```python
rollout_weights: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`.

The sum of the `rollout_weights` must equal 100000 and the number of rollout weights specified in the array must match the number of flag variations. You must specify either `variation` or `rollout_weights`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#rollout_weights FeatureFlagEnvironment#rollout_weights}

---

##### `variation`<sup>Optional</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.variation"></a>

```python
variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The integer variation index to serve if the rule clauses evaluate to `true`.

You must specify either `variation` or `rollout_weights`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentRulesClauses <a name="FeatureFlagEnvironmentRulesClauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses(
  attribute: str,
  op: str,
  values: typing.List[str],
  context_kind: str = None,
  negate: typing.Union[bool, IResolvable] = None,
  value_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.attribute">attribute</a></code> | <code>str</code> | The user attribute to operate on. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.op">op</a></code> | <code>str</code> | The operator associated with the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.values">values</a></code> | <code>typing.List[str]</code> | The list of values associated with the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.contextKind">context_kind</a></code> | <code>str</code> | The context kind associated with this rule clause. If omitted, defaults to `user`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to negate the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.valueType">value_type</a></code> | <code>str</code> | The type for each of the clause's values. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

The user attribute to operate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#attribute FeatureFlagEnvironment#attribute}

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.op"></a>

```python
op: str
```

- *Type:* str

The operator associated with the rule clause.

Available options are `in`, `endsWith`, `startsWith`, `matches`, `contains`, `lessThan`, `lessThanOrEqual`, `greaterThanOrEqual`, `before`, `after`, `segmentMatch`, `semVerEqual`, `semVerLessThan`, and `semVerGreaterThan`. Read LaunchDarkly's [Operators](https://docs.launchdarkly.com/sdk/concepts/flag-evaluation-rules#operators) documentation for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#op FeatureFlagEnvironment#op}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The list of values associated with the rule clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}

---

##### `context_kind`<sup>Optional</sup> <a name="context_kind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.contextKind"></a>

```python
context_kind: str
```

- *Type:* str

The context kind associated with this rule clause. If omitted, defaults to `user`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.negate"></a>

```python
negate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to negate the rule clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#negate FeatureFlagEnvironment#negate}

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

The type for each of the clause's values.

Available types are `boolean`, `string`, and `number`. If omitted, `value_type` defaults to `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#value_type FeatureFlagEnvironment#value_type}

---

### FeatureFlagEnvironmentTargets <a name="FeatureFlagEnvironmentTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentTargets(
  values: typing.List[str],
  variation: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.values">values</a></code> | <code>typing.List[str]</code> | List of `user` strings to target. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.variation">variation</a></code> | <code>typing.Union[int, float]</code> | The index of the variation to serve if a user target value is matched. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

List of `user` strings to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.variation"></a>

```python
variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The index of the variation to serve if a user target value is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.22.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureFlagEnvironmentContextTargetsList <a name="FeatureFlagEnvironmentContextTargetsList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FeatureFlagEnvironmentContextTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentContextTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>]]

---


### FeatureFlagEnvironmentContextTargetsOutputReference <a name="FeatureFlagEnvironmentContextTargetsOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKindInput">context_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variationInput">variation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKind">context_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variation">variation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_kind_input`<sup>Optional</sup> <a name="context_kind_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKindInput"></a>

```python
context_kind_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `variation_input`<sup>Optional</sup> <a name="variation_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variationInput"></a>

```python
variation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `context_kind`<sup>Required</sup> <a name="context_kind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKind"></a>

```python
context_kind: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variation"></a>

```python
variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FeatureFlagEnvironmentContextTargets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>]

---


### FeatureFlagEnvironmentFallthroughOutputReference <a name="FeatureFlagEnvironmentFallthroughOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetBucketBy">reset_bucket_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetContextKind">reset_context_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetRolloutWeights">reset_rollout_weights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetVariation">reset_variation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_by` <a name="reset_bucket_by" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetBucketBy"></a>

```python
def reset_bucket_by() -> None
```

##### `reset_context_kind` <a name="reset_context_kind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetContextKind"></a>

```python
def reset_context_kind() -> None
```

##### `reset_rollout_weights` <a name="reset_rollout_weights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetRolloutWeights"></a>

```python
def reset_rollout_weights() -> None
```

##### `reset_variation` <a name="reset_variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetVariation"></a>

```python
def reset_variation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketByInput">bucket_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKindInput">context_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeightsInput">rollout_weights_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variationInput">variation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketBy">bucket_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKind">context_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeights">rollout_weights</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variation">variation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_by_input`<sup>Optional</sup> <a name="bucket_by_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketByInput"></a>

```python
bucket_by_input: str
```

- *Type:* str

---

##### `context_kind_input`<sup>Optional</sup> <a name="context_kind_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKindInput"></a>

```python
context_kind_input: str
```

- *Type:* str

---

##### `rollout_weights_input`<sup>Optional</sup> <a name="rollout_weights_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeightsInput"></a>

```python
rollout_weights_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `variation_input`<sup>Optional</sup> <a name="variation_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variationInput"></a>

```python
variation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bucket_by`<sup>Required</sup> <a name="bucket_by" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketBy"></a>

```python
bucket_by: str
```

- *Type:* str

---

##### `context_kind`<sup>Required</sup> <a name="context_kind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKind"></a>

```python
context_kind: str
```

- *Type:* str

---

##### `rollout_weights`<sup>Required</sup> <a name="rollout_weights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeights"></a>

```python
rollout_weights: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variation"></a>

```python
variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.internalValue"></a>

```python
internal_value: FeatureFlagEnvironmentFallthrough
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

---


### FeatureFlagEnvironmentPrerequisitesList <a name="FeatureFlagEnvironmentPrerequisitesList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FeatureFlagEnvironmentPrerequisitesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentPrerequisites]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>]]

---


### FeatureFlagEnvironmentPrerequisitesOutputReference <a name="FeatureFlagEnvironmentPrerequisitesOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKeyInput">flag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variationInput">variation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKey">flag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variation">variation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flag_key_input`<sup>Optional</sup> <a name="flag_key_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKeyInput"></a>

```python
flag_key_input: str
```

- *Type:* str

---

##### `variation_input`<sup>Optional</sup> <a name="variation_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variationInput"></a>

```python
variation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `flag_key`<sup>Required</sup> <a name="flag_key" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKey"></a>

```python
flag_key: str
```

- *Type:* str

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variation"></a>

```python
variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FeatureFlagEnvironmentPrerequisites]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>]

---


### FeatureFlagEnvironmentRulesClausesList <a name="FeatureFlagEnvironmentRulesClausesList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FeatureFlagEnvironmentRulesClausesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentRulesClauses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>]]

---


### FeatureFlagEnvironmentRulesClausesOutputReference <a name="FeatureFlagEnvironmentRulesClausesOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetContextKind">reset_context_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetNegate">reset_negate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetValueType">reset_value_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_context_kind` <a name="reset_context_kind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetContextKind"></a>

```python
def reset_context_kind() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```

##### `reset_value_type` <a name="reset_value_type" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetValueType"></a>

```python
def reset_value_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKindInput">context_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negateInput">negate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.opInput">op_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKind">context_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.op">op</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `context_kind_input`<sup>Optional</sup> <a name="context_kind_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKindInput"></a>

```python
context_kind_input: str
```

- *Type:* str

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negateInput"></a>

```python
negate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `op_input`<sup>Optional</sup> <a name="op_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.opInput"></a>

```python
op_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `context_kind`<sup>Required</sup> <a name="context_kind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKind"></a>

```python
context_kind: str
```

- *Type:* str

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negate"></a>

```python
negate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.op"></a>

```python
op: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FeatureFlagEnvironmentRulesClauses]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>]

---


### FeatureFlagEnvironmentRulesList <a name="FeatureFlagEnvironmentRulesList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FeatureFlagEnvironmentRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>]]

---


### FeatureFlagEnvironmentRulesOutputReference <a name="FeatureFlagEnvironmentRulesOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.putClauses">put_clauses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetBucketBy">reset_bucket_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetClauses">reset_clauses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetRolloutWeights">reset_rollout_weights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetVariation">reset_variation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_clauses` <a name="put_clauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.putClauses"></a>

```python
def put_clauses(
  value: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentRulesClauses]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.putClauses.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>]]

---

##### `reset_bucket_by` <a name="reset_bucket_by" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetBucketBy"></a>

```python
def reset_bucket_by() -> None
```

##### `reset_clauses` <a name="reset_clauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetClauses"></a>

```python
def reset_clauses() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_rollout_weights` <a name="reset_rollout_weights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetRolloutWeights"></a>

```python
def reset_rollout_weights() -> None
```

##### `reset_variation` <a name="reset_variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetVariation"></a>

```python
def reset_variation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clauses">clauses</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList">FeatureFlagEnvironmentRulesClausesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketByInput">bucket_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clausesInput">clauses_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeightsInput">rollout_weights_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variationInput">variation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketBy">bucket_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeights">rollout_weights</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variation">variation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clauses`<sup>Required</sup> <a name="clauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clauses"></a>

```python
clauses: FeatureFlagEnvironmentRulesClausesList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList">FeatureFlagEnvironmentRulesClausesList</a>

---

##### `bucket_by_input`<sup>Optional</sup> <a name="bucket_by_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketByInput"></a>

```python
bucket_by_input: str
```

- *Type:* str

---

##### `clauses_input`<sup>Optional</sup> <a name="clauses_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clausesInput"></a>

```python
clauses_input: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentRulesClauses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `rollout_weights_input`<sup>Optional</sup> <a name="rollout_weights_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeightsInput"></a>

```python
rollout_weights_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `variation_input`<sup>Optional</sup> <a name="variation_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variationInput"></a>

```python
variation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bucket_by`<sup>Required</sup> <a name="bucket_by" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketBy"></a>

```python
bucket_by: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `rollout_weights`<sup>Required</sup> <a name="rollout_weights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeights"></a>

```python
rollout_weights: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variation"></a>

```python
variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FeatureFlagEnvironmentRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>]

---


### FeatureFlagEnvironmentTargetsList <a name="FeatureFlagEnvironmentTargetsList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FeatureFlagEnvironmentTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FeatureFlagEnvironmentTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>]]

---


### FeatureFlagEnvironmentTargetsOutputReference <a name="FeatureFlagEnvironmentTargetsOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag_environment

featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variationInput">variation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variation">variation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `variation_input`<sup>Optional</sup> <a name="variation_input" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variationInput"></a>

```python
variation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variation"></a>

```python
variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FeatureFlagEnvironmentTargets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>]

---



