# `featureFlag` Submodule <a name="`featureFlag` Submodule" id="@cdktf/provider-launchdarkly.featureFlag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureFlag <a name="FeatureFlag" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag launchdarkly_feature_flag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlag(
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
  project_key: str,
  variation_type: str,
  archived: typing.Union[bool, IResolvable] = None,
  client_side_availability: typing.Union[IResolvable, typing.List[FeatureFlagClientSideAvailability]] = None,
  custom_properties: typing.Union[IResolvable, typing.List[FeatureFlagCustomProperties]] = None,
  defaults: FeatureFlagDefaults = None,
  description: str = None,
  id: str = None,
  include_in_snippet: typing.Union[bool, IResolvable] = None,
  maintainer_id: str = None,
  maintainer_team_key: str = None,
  tags: typing.List[str] = None,
  temporary: typing.Union[bool, IResolvable] = None,
  variations: typing.Union[IResolvable, typing.List[FeatureFlagVariations]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.key">key</a></code> | <code>str</code> | The unique feature flag key that references the flag in your application code. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.name">name</a></code> | <code>str</code> | The human-readable name of the feature flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.projectKey">project_key</a></code> | <code>str</code> | The feature flag's project key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.variationType">variation_type</a></code> | <code>str</code> | The feature flag's variation type: `boolean`, `string`, `number` or `json`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the flag is archived or not. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.clientSideAvailability">client_side_availability</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>]]</code> | client_side_availability block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.customProperties">custom_properties</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>]]</code> | custom_properties block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.defaults">defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | defaults block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.description">description</a></code> | <code>str</code> | The feature flag's description. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#id FeatureFlag#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.includeInSnippet">include_in_snippet</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether this flag should be made available to the client-side JavaScript SDK using the client-side Id. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.maintainerId">maintainer_id</a></code> | <code>str</code> | The feature flag maintainer's 24 character alphanumeric team member ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.maintainerTeamKey">maintainer_team_key</a></code> | <code>str</code> | The key of the associated team that maintains this feature flag. `maintainer_id` cannot be set if `maintainer_team_key` is set. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.temporary">temporary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the flag is a temporary flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.variations">variations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>]]</code> | variations block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.key"></a>

- *Type:* str

The unique feature flag key that references the flag in your application code.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#key FeatureFlag#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.name"></a>

- *Type:* str

The human-readable name of the feature flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#name FeatureFlag#name}

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.projectKey"></a>

- *Type:* str

The feature flag's project key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#project_key FeatureFlag#project_key}

---

##### `variation_type`<sup>Required</sup> <a name="variation_type" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.variationType"></a>

- *Type:* str

The feature flag's variation type: `boolean`, `string`, `number` or `json`.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#variation_type FeatureFlag#variation_type}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.archived"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the flag is archived or not.

Note that you cannot create a new flag that is archived, but can update a flag to be archived.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#archived FeatureFlag#archived}

---

##### `client_side_availability`<sup>Optional</sup> <a name="client_side_availability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.clientSideAvailability"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>]]

client_side_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#client_side_availability FeatureFlag#client_side_availability}

---

##### `custom_properties`<sup>Optional</sup> <a name="custom_properties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.customProperties"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>]]

custom_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#custom_properties FeatureFlag#custom_properties}

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.defaults"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#defaults FeatureFlag#defaults}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.description"></a>

- *Type:* str

The feature flag's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#description FeatureFlag#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#id FeatureFlag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_in_snippet`<sup>Optional</sup> <a name="include_in_snippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.includeInSnippet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether this flag should be made available to the client-side JavaScript SDK using the client-side Id.

This value gets its default from your project configuration if not set. `include_in_snippet` is now deprecated. Please migrate to `client_side_availability.using_environment_id` to maintain future compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#include_in_snippet FeatureFlag#include_in_snippet}

---

##### `maintainer_id`<sup>Optional</sup> <a name="maintainer_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.maintainerId"></a>

- *Type:* str

The feature flag maintainer's 24 character alphanumeric team member ID.

`maintainer_team_key` cannot be set if `maintainer_id` is set. If neither is set, it will automatically be or stay set to the member ID associated with the API key used by your LaunchDarkly Terraform provider or the most recently-set maintainer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#maintainer_id FeatureFlag#maintainer_id}

---

##### `maintainer_team_key`<sup>Optional</sup> <a name="maintainer_team_key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.maintainerTeamKey"></a>

- *Type:* str

The key of the associated team that maintains this feature flag. `maintainer_id` cannot be set if `maintainer_team_key` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#maintainer_team_key FeatureFlag#maintainer_team_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#tags FeatureFlag#tags}

---

##### `temporary`<sup>Optional</sup> <a name="temporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.temporary"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the flag is a temporary flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#temporary FeatureFlag#temporary}

---

##### `variations`<sup>Optional</sup> <a name="variations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.variations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>]]

variations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#variations FeatureFlag#variations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putClientSideAvailability">put_client_side_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putCustomProperties">put_custom_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults">put_defaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putVariations">put_variations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetArchived">reset_archived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetClientSideAvailability">reset_client_side_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetCustomProperties">reset_custom_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDefaults">reset_defaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetIncludeInSnippet">reset_include_in_snippet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerId">reset_maintainer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerTeamKey">reset_maintainer_team_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTemporary">reset_temporary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetVariations">reset_variations</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_client_side_availability` <a name="put_client_side_availability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putClientSideAvailability"></a>

```python
def put_client_side_availability(
  value: typing.Union[IResolvable, typing.List[FeatureFlagClientSideAvailability]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putClientSideAvailability.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>]]

---

##### `put_custom_properties` <a name="put_custom_properties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putCustomProperties"></a>

```python
def put_custom_properties(
  value: typing.Union[IResolvable, typing.List[FeatureFlagCustomProperties]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putCustomProperties.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>]]

---

##### `put_defaults` <a name="put_defaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults"></a>

```python
def put_defaults(
  off_variation: typing.Union[int, float],
  on_variation: typing.Union[int, float]
) -> None
```

###### `off_variation`<sup>Required</sup> <a name="off_variation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults.parameter.offVariation"></a>

- *Type:* typing.Union[int, float]

The index of the variation the flag will default to in all new environments when off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#off_variation FeatureFlag#off_variation}

---

###### `on_variation`<sup>Required</sup> <a name="on_variation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults.parameter.onVariation"></a>

- *Type:* typing.Union[int, float]

The index of the variation the flag will default to in all new environments when on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#on_variation FeatureFlag#on_variation}

---

##### `put_variations` <a name="put_variations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putVariations"></a>

```python
def put_variations(
  value: typing.Union[IResolvable, typing.List[FeatureFlagVariations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putVariations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>]]

---

##### `reset_archived` <a name="reset_archived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetArchived"></a>

```python
def reset_archived() -> None
```

##### `reset_client_side_availability` <a name="reset_client_side_availability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetClientSideAvailability"></a>

```python
def reset_client_side_availability() -> None
```

##### `reset_custom_properties` <a name="reset_custom_properties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetCustomProperties"></a>

```python
def reset_custom_properties() -> None
```

##### `reset_defaults` <a name="reset_defaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDefaults"></a>

```python
def reset_defaults() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_in_snippet` <a name="reset_include_in_snippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetIncludeInSnippet"></a>

```python
def reset_include_in_snippet() -> None
```

##### `reset_maintainer_id` <a name="reset_maintainer_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerId"></a>

```python
def reset_maintainer_id() -> None
```

##### `reset_maintainer_team_key` <a name="reset_maintainer_team_key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerTeamKey"></a>

```python
def reset_maintainer_team_key() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_temporary` <a name="reset_temporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTemporary"></a>

```python
def reset_temporary() -> None
```

##### `reset_variations` <a name="reset_variations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetVariations"></a>

```python
def reset_variations() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FeatureFlag resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isConstruct"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlag.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlag.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlag.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlag.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FeatureFlag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FeatureFlag to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FeatureFlag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FeatureFlag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailability">client_side_availability</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList">FeatureFlagClientSideAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customProperties">custom_properties</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList">FeatureFlagCustomPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaults">defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference">FeatureFlagDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variations">variations</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList">FeatureFlagVariationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archivedInput">archived_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailabilityInput">client_side_availability_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customPropertiesInput">custom_properties_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaultsInput">defaults_input</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippetInput">include_in_snippet_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerIdInput">maintainer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKeyInput">maintainer_team_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKeyInput">project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporaryInput">temporary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationsInput">variations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationTypeInput">variation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippet">include_in_snippet</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerId">maintainer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKey">maintainer_team_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporary">temporary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationType">variation_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_side_availability`<sup>Required</sup> <a name="client_side_availability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailability"></a>

```python
client_side_availability: FeatureFlagClientSideAvailabilityList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList">FeatureFlagClientSideAvailabilityList</a>

---

##### `custom_properties`<sup>Required</sup> <a name="custom_properties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customProperties"></a>

```python
custom_properties: FeatureFlagCustomPropertiesList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList">FeatureFlagCustomPropertiesList</a>

---

##### `defaults`<sup>Required</sup> <a name="defaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaults"></a>

```python
defaults: FeatureFlagDefaultsOutputReference
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference">FeatureFlagDefaultsOutputReference</a>

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variations"></a>

```python
variations: FeatureFlagVariationsList
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList">FeatureFlagVariationsList</a>

---

##### `archived_input`<sup>Optional</sup> <a name="archived_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archivedInput"></a>

```python
archived_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_side_availability_input`<sup>Optional</sup> <a name="client_side_availability_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailabilityInput"></a>

```python
client_side_availability_input: typing.Union[IResolvable, typing.List[FeatureFlagClientSideAvailability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>]]

---

##### `custom_properties_input`<sup>Optional</sup> <a name="custom_properties_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customPropertiesInput"></a>

```python
custom_properties_input: typing.Union[IResolvable, typing.List[FeatureFlagCustomProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>]]

---

##### `defaults_input`<sup>Optional</sup> <a name="defaults_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaultsInput"></a>

```python
defaults_input: FeatureFlagDefaults
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_in_snippet_input`<sup>Optional</sup> <a name="include_in_snippet_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippetInput"></a>

```python
include_in_snippet_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `maintainer_id_input`<sup>Optional</sup> <a name="maintainer_id_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerIdInput"></a>

```python
maintainer_id_input: str
```

- *Type:* str

---

##### `maintainer_team_key_input`<sup>Optional</sup> <a name="maintainer_team_key_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKeyInput"></a>

```python
maintainer_team_key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_key_input`<sup>Optional</sup> <a name="project_key_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKeyInput"></a>

```python
project_key_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `temporary_input`<sup>Optional</sup> <a name="temporary_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporaryInput"></a>

```python
temporary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `variations_input`<sup>Optional</sup> <a name="variations_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationsInput"></a>

```python
variations_input: typing.Union[IResolvable, typing.List[FeatureFlagVariations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>]]

---

##### `variation_type_input`<sup>Optional</sup> <a name="variation_type_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationTypeInput"></a>

```python
variation_type_input: str
```

- *Type:* str

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_in_snippet`<sup>Required</sup> <a name="include_in_snippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippet"></a>

```python
include_in_snippet: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `maintainer_id`<sup>Required</sup> <a name="maintainer_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerId"></a>

```python
maintainer_id: str
```

- *Type:* str

---

##### `maintainer_team_key`<sup>Required</sup> <a name="maintainer_team_key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKey"></a>

```python
maintainer_team_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `temporary`<sup>Required</sup> <a name="temporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporary"></a>

```python
temporary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `variation_type`<sup>Required</sup> <a name="variation_type" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationType"></a>

```python
variation_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureFlagClientSideAvailability <a name="FeatureFlagClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlagClientSideAvailability(
  using_environment_id: typing.Union[bool, IResolvable] = None,
  using_mobile_key: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingEnvironmentId">using_environment_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this flag is available to SDKs using the client-side ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingMobileKey">using_mobile_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this flag is available to SDKs using a mobile key. |

---

##### `using_environment_id`<sup>Optional</sup> <a name="using_environment_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingEnvironmentId"></a>

```python
using_environment_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this flag is available to SDKs using the client-side ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#using_environment_id FeatureFlag#using_environment_id}

---

##### `using_mobile_key`<sup>Optional</sup> <a name="using_mobile_key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingMobileKey"></a>

```python
using_mobile_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this flag is available to SDKs using a mobile key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#using_mobile_key FeatureFlag#using_mobile_key}

---

### FeatureFlagConfig <a name="FeatureFlagConfig" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlagConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key: str,
  name: str,
  project_key: str,
  variation_type: str,
  archived: typing.Union[bool, IResolvable] = None,
  client_side_availability: typing.Union[IResolvable, typing.List[FeatureFlagClientSideAvailability]] = None,
  custom_properties: typing.Union[IResolvable, typing.List[FeatureFlagCustomProperties]] = None,
  defaults: FeatureFlagDefaults = None,
  description: str = None,
  id: str = None,
  include_in_snippet: typing.Union[bool, IResolvable] = None,
  maintainer_id: str = None,
  maintainer_team_key: str = None,
  tags: typing.List[str] = None,
  temporary: typing.Union[bool, IResolvable] = None,
  variations: typing.Union[IResolvable, typing.List[FeatureFlagVariations]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.key">key</a></code> | <code>str</code> | The unique feature flag key that references the flag in your application code. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.name">name</a></code> | <code>str</code> | The human-readable name of the feature flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.projectKey">project_key</a></code> | <code>str</code> | The feature flag's project key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variationType">variation_type</a></code> | <code>str</code> | The feature flag's variation type: `boolean`, `string`, `number` or `json`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the flag is archived or not. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.clientSideAvailability">client_side_availability</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>]]</code> | client_side_availability block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.customProperties">custom_properties</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>]]</code> | custom_properties block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.defaults">defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | defaults block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.description">description</a></code> | <code>str</code> | The feature flag's description. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#id FeatureFlag#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.includeInSnippet">include_in_snippet</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether this flag should be made available to the client-side JavaScript SDK using the client-side Id. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerId">maintainer_id</a></code> | <code>str</code> | The feature flag maintainer's 24 character alphanumeric team member ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerTeamKey">maintainer_team_key</a></code> | <code>str</code> | The key of the associated team that maintains this feature flag. `maintainer_id` cannot be set if `maintainer_team_key` is set. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.temporary">temporary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the flag is a temporary flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variations">variations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>]]</code> | variations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.key"></a>

```python
key: str
```

- *Type:* str

The unique feature flag key that references the flag in your application code.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#key FeatureFlag#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The human-readable name of the feature flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#name FeatureFlag#name}

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

The feature flag's project key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#project_key FeatureFlag#project_key}

---

##### `variation_type`<sup>Required</sup> <a name="variation_type" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variationType"></a>

```python
variation_type: str
```

- *Type:* str

The feature flag's variation type: `boolean`, `string`, `number` or `json`.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#variation_type FeatureFlag#variation_type}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the flag is archived or not.

Note that you cannot create a new flag that is archived, but can update a flag to be archived.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#archived FeatureFlag#archived}

---

##### `client_side_availability`<sup>Optional</sup> <a name="client_side_availability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.clientSideAvailability"></a>

```python
client_side_availability: typing.Union[IResolvable, typing.List[FeatureFlagClientSideAvailability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>]]

client_side_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#client_side_availability FeatureFlag#client_side_availability}

---

##### `custom_properties`<sup>Optional</sup> <a name="custom_properties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.customProperties"></a>

```python
custom_properties: typing.Union[IResolvable, typing.List[FeatureFlagCustomProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>]]

custom_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#custom_properties FeatureFlag#custom_properties}

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.defaults"></a>

```python
defaults: FeatureFlagDefaults
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#defaults FeatureFlag#defaults}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The feature flag's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#description FeatureFlag#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#id FeatureFlag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_in_snippet`<sup>Optional</sup> <a name="include_in_snippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.includeInSnippet"></a>

```python
include_in_snippet: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether this flag should be made available to the client-side JavaScript SDK using the client-side Id.

This value gets its default from your project configuration if not set. `include_in_snippet` is now deprecated. Please migrate to `client_side_availability.using_environment_id` to maintain future compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#include_in_snippet FeatureFlag#include_in_snippet}

---

##### `maintainer_id`<sup>Optional</sup> <a name="maintainer_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerId"></a>

```python
maintainer_id: str
```

- *Type:* str

The feature flag maintainer's 24 character alphanumeric team member ID.

`maintainer_team_key` cannot be set if `maintainer_id` is set. If neither is set, it will automatically be or stay set to the member ID associated with the API key used by your LaunchDarkly Terraform provider or the most recently-set maintainer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#maintainer_id FeatureFlag#maintainer_id}

---

##### `maintainer_team_key`<sup>Optional</sup> <a name="maintainer_team_key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerTeamKey"></a>

```python
maintainer_team_key: str
```

- *Type:* str

The key of the associated team that maintains this feature flag. `maintainer_id` cannot be set if `maintainer_team_key` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#maintainer_team_key FeatureFlag#maintainer_team_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#tags FeatureFlag#tags}

---

##### `temporary`<sup>Optional</sup> <a name="temporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.temporary"></a>

```python
temporary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the flag is a temporary flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#temporary FeatureFlag#temporary}

---

##### `variations`<sup>Optional</sup> <a name="variations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variations"></a>

```python
variations: typing.Union[IResolvable, typing.List[FeatureFlagVariations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>]]

variations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#variations FeatureFlag#variations}

---

### FeatureFlagCustomProperties <a name="FeatureFlagCustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlagCustomProperties(
  key: str,
  name: str,
  value: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.key">key</a></code> | <code>str</code> | The unique custom property key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.name">name</a></code> | <code>str</code> | The name of the custom property. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.value">value</a></code> | <code>typing.List[str]</code> | The list of custom property value strings. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.key"></a>

```python
key: str
```

- *Type:* str

The unique custom property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#key FeatureFlag#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#name FeatureFlag#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

The list of custom property value strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#value FeatureFlag#value}

---

### FeatureFlagDefaults <a name="FeatureFlagDefaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlagDefaults(
  off_variation: typing.Union[int, float],
  on_variation: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.offVariation">off_variation</a></code> | <code>typing.Union[int, float]</code> | The index of the variation the flag will default to in all new environments when off. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.onVariation">on_variation</a></code> | <code>typing.Union[int, float]</code> | The index of the variation the flag will default to in all new environments when on. |

---

##### `off_variation`<sup>Required</sup> <a name="off_variation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.offVariation"></a>

```python
off_variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The index of the variation the flag will default to in all new environments when off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#off_variation FeatureFlag#off_variation}

---

##### `on_variation`<sup>Required</sup> <a name="on_variation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.onVariation"></a>

```python
on_variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The index of the variation the flag will default to in all new environments when on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#on_variation FeatureFlag#on_variation}

---

### FeatureFlagVariations <a name="FeatureFlagVariations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlagVariations(
  value: str,
  description: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.value">value</a></code> | <code>str</code> | The variation value. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.description">description</a></code> | <code>str</code> | The variation's description. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.name">name</a></code> | <code>str</code> | The name of the variation. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.value"></a>

```python
value: str
```

- *Type:* str

The variation value.

The value's type must correspond to the `variation_type` argument. For example: `variation_type = "boolean"` accepts only `true` or `false`. The `number` variation type accepts both floats and ints, but please note that any trailing zeroes on floats will be trimmed (i.e. `1.1` and `1.100` will both be converted to `1.1`).

If you wish to define an empty string variation, you must still define the value field on the variations block like so:

```terraform
variations {
  value = ""
}
```

-> **Note:** Terraform manages `variations` as an ordered array and identifies them by index. This means that if you change the order of your `variations` block, you may end up destroying and recreating those variations. Additionally, if you delete variations that have targets that have been attached outside of Terraform, those targets may be incorrectly reassigned to a different variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#value FeatureFlag#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.description"></a>

```python
description: str
```

- *Type:* str

The variation's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#description FeatureFlag#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.23.1/docs/resources/feature_flag#name FeatureFlag#name}

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureFlagClientSideAvailabilityList <a name="FeatureFlagClientSideAvailabilityList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlagClientSideAvailabilityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FeatureFlagClientSideAvailabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FeatureFlagClientSideAvailability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>]]

---


### FeatureFlagClientSideAvailabilityOutputReference <a name="FeatureFlagClientSideAvailabilityOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlagClientSideAvailabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingEnvironmentId">reset_using_environment_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingMobileKey">reset_using_mobile_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_using_environment_id` <a name="reset_using_environment_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingEnvironmentId"></a>

```python
def reset_using_environment_id() -> None
```

##### `reset_using_mobile_key` <a name="reset_using_mobile_key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingMobileKey"></a>

```python
def reset_using_mobile_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput">using_environment_id_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKeyInput">using_mobile_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentId">using_environment_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKey">using_mobile_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `using_environment_id_input`<sup>Optional</sup> <a name="using_environment_id_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput"></a>

```python
using_environment_id_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `using_mobile_key_input`<sup>Optional</sup> <a name="using_mobile_key_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKeyInput"></a>

```python
using_mobile_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `using_environment_id`<sup>Required</sup> <a name="using_environment_id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentId"></a>

```python
using_environment_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `using_mobile_key`<sup>Required</sup> <a name="using_mobile_key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKey"></a>

```python
using_mobile_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FeatureFlagClientSideAvailability]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>]

---


### FeatureFlagCustomPropertiesList <a name="FeatureFlagCustomPropertiesList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlagCustomPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FeatureFlagCustomPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FeatureFlagCustomProperties]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>]]

---


### FeatureFlagCustomPropertiesOutputReference <a name="FeatureFlagCustomPropertiesOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlagCustomPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.valueInput">value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.value">value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.valueInput"></a>

```python
value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FeatureFlagCustomProperties]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>]

---


### FeatureFlagDefaultsOutputReference <a name="FeatureFlagDefaultsOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlagDefaultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariationInput">off_variation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariationInput">on_variation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariation">off_variation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariation">on_variation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `off_variation_input`<sup>Optional</sup> <a name="off_variation_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariationInput"></a>

```python
off_variation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `on_variation_input`<sup>Optional</sup> <a name="on_variation_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariationInput"></a>

```python
on_variation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `off_variation`<sup>Required</sup> <a name="off_variation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariation"></a>

```python
off_variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `on_variation`<sup>Required</sup> <a name="on_variation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariation"></a>

```python
on_variation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.internalValue"></a>

```python
internal_value: FeatureFlagDefaults
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

---


### FeatureFlagVariationsList <a name="FeatureFlagVariationsList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlagVariationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FeatureFlagVariationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FeatureFlagVariations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>]]

---


### FeatureFlagVariationsOutputReference <a name="FeatureFlagVariationsOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_launchdarkly import feature_flag

featureFlag.FeatureFlagVariationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FeatureFlagVariations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>]

---



