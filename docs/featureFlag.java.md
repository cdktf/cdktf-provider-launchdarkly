# `featureFlag` Submodule <a name="`featureFlag` Submodule" id="@cdktf/provider-launchdarkly.featureFlag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureFlag <a name="FeatureFlag" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag launchdarkly_feature_flag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlag;

FeatureFlag.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .key(java.lang.String)
    .name(java.lang.String)
    .projectKey(java.lang.String)
    .variationType(java.lang.String)
//  .archived(java.lang.Boolean|IResolvable)
//  .clientSideAvailability(IResolvable|java.util.List<FeatureFlagClientSideAvailability>)
//  .customProperties(IResolvable|java.util.List<FeatureFlagCustomProperties>)
//  .defaults(FeatureFlagDefaults)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .includeInSnippet(java.lang.Boolean|IResolvable)
//  .maintainerId(java.lang.String)
//  .maintainerTeamKey(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .temporary(java.lang.Boolean|IResolvable)
//  .variations(IResolvable|java.util.List<FeatureFlagVariations>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | The unique feature flag key that references the flag in your application code. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The human-readable name of the feature flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.projectKey">projectKey</a></code> | <code>java.lang.String</code> | The feature flag's project key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.variationType">variationType</a></code> | <code>java.lang.String</code> | The feature flag's variation type: `boolean`, `string`, `number` or `json`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.archived">archived</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether the flag is archived or not. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.clientSideAvailability">clientSideAvailability</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>></code> | client_side_availability block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.customProperties">customProperties</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>></code> | custom_properties block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.defaults">defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | defaults block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The feature flag's description. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#id FeatureFlag#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.includeInSnippet">includeInSnippet</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether this flag should be made available to the client-side JavaScript SDK using the client-side Id. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.maintainerId">maintainerId</a></code> | <code>java.lang.String</code> | The feature flag maintainer's 24 character alphanumeric team member ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.maintainerTeamKey">maintainerTeamKey</a></code> | <code>java.lang.String</code> | The key of the associated team that maintains this feature flag. `maintainer_id` cannot be set if `maintainer_team_key` is set. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.temporary">temporary</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether the flag is a temporary flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.variations">variations</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>></code> | variations block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.key"></a>

- *Type:* java.lang.String

The unique feature flag key that references the flag in your application code.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#key FeatureFlag#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The human-readable name of the feature flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#name FeatureFlag#name}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.projectKey"></a>

- *Type:* java.lang.String

The feature flag's project key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#project_key FeatureFlag#project_key}

---

##### `variationType`<sup>Required</sup> <a name="variationType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.variationType"></a>

- *Type:* java.lang.String

The feature flag's variation type: `boolean`, `string`, `number` or `json`.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#variation_type FeatureFlag#variation_type}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.archived"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether the flag is archived or not.

Note that you cannot create a new flag that is archived, but can update a flag to be archived.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#archived FeatureFlag#archived}

---

##### `clientSideAvailability`<sup>Optional</sup> <a name="clientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.clientSideAvailability"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>>

client_side_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#client_side_availability FeatureFlag#client_side_availability}

---

##### `customProperties`<sup>Optional</sup> <a name="customProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.customProperties"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>>

custom_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#custom_properties FeatureFlag#custom_properties}

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.defaults"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#defaults FeatureFlag#defaults}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The feature flag's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#description FeatureFlag#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#id FeatureFlag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeInSnippet`<sup>Optional</sup> <a name="includeInSnippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.includeInSnippet"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether this flag should be made available to the client-side JavaScript SDK using the client-side Id.

This value gets its default from your project configuration if not set. `include_in_snippet` is now deprecated. Please migrate to `client_side_availability.using_environment_id` to maintain future compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#include_in_snippet FeatureFlag#include_in_snippet}

---

##### `maintainerId`<sup>Optional</sup> <a name="maintainerId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.maintainerId"></a>

- *Type:* java.lang.String

The feature flag maintainer's 24 character alphanumeric team member ID.

`maintainer_team_key` cannot be set if `maintainer_id` is set. If neither is set, it will automatically be or stay set to the member ID associated with the API key used by your LaunchDarkly Terraform provider or the most recently-set maintainer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#maintainer_id FeatureFlag#maintainer_id}

---

##### `maintainerTeamKey`<sup>Optional</sup> <a name="maintainerTeamKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.maintainerTeamKey"></a>

- *Type:* java.lang.String

The key of the associated team that maintains this feature flag. `maintainer_id` cannot be set if `maintainer_team_key` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#maintainer_team_key FeatureFlag#maintainer_team_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#tags FeatureFlag#tags}

---

##### `temporary`<sup>Optional</sup> <a name="temporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.temporary"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether the flag is a temporary flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#temporary FeatureFlag#temporary}

---

##### `variations`<sup>Optional</sup> <a name="variations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.variations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>>

variations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#variations FeatureFlag#variations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putClientSideAvailability">putClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putCustomProperties">putCustomProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults">putDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putVariations">putVariations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetClientSideAvailability">resetClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetCustomProperties">resetCustomProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDefaults">resetDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetIncludeInSnippet">resetIncludeInSnippet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerId">resetMaintainerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerTeamKey">resetMaintainerTeamKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTemporary">resetTemporary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetVariations">resetVariations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClientSideAvailability` <a name="putClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putClientSideAvailability"></a>

```java
public void putClientSideAvailability(IResolvable|java.util.List<FeatureFlagClientSideAvailability> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putClientSideAvailability.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>>

---

##### `putCustomProperties` <a name="putCustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putCustomProperties"></a>

```java
public void putCustomProperties(IResolvable|java.util.List<FeatureFlagCustomProperties> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putCustomProperties.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>>

---

##### `putDefaults` <a name="putDefaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults"></a>

```java
public void putDefaults(FeatureFlagDefaults value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

---

##### `putVariations` <a name="putVariations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putVariations"></a>

```java
public void putVariations(IResolvable|java.util.List<FeatureFlagVariations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putVariations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>>

---

##### `resetArchived` <a name="resetArchived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetArchived"></a>

```java
public void resetArchived()
```

##### `resetClientSideAvailability` <a name="resetClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetClientSideAvailability"></a>

```java
public void resetClientSideAvailability()
```

##### `resetCustomProperties` <a name="resetCustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetCustomProperties"></a>

```java
public void resetCustomProperties()
```

##### `resetDefaults` <a name="resetDefaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDefaults"></a>

```java
public void resetDefaults()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeInSnippet` <a name="resetIncludeInSnippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetIncludeInSnippet"></a>

```java
public void resetIncludeInSnippet()
```

##### `resetMaintainerId` <a name="resetMaintainerId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerId"></a>

```java
public void resetMaintainerId()
```

##### `resetMaintainerTeamKey` <a name="resetMaintainerTeamKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerTeamKey"></a>

```java
public void resetMaintainerTeamKey()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemporary` <a name="resetTemporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTemporary"></a>

```java
public void resetTemporary()
```

##### `resetVariations` <a name="resetVariations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetVariations"></a>

```java
public void resetVariations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FeatureFlag resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlag;

FeatureFlag.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlag;

FeatureFlag.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlag;

FeatureFlag.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlag;

FeatureFlag.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FeatureFlag.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FeatureFlag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FeatureFlag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FeatureFlag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FeatureFlag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailability">clientSideAvailability</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList">FeatureFlagClientSideAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customProperties">customProperties</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList">FeatureFlagCustomPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaults">defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference">FeatureFlagDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variations">variations</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList">FeatureFlagVariationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archivedInput">archivedInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailabilityInput">clientSideAvailabilityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customPropertiesInput">customPropertiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaultsInput">defaultsInput</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippetInput">includeInSnippetInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerIdInput">maintainerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKeyInput">maintainerTeamKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKeyInput">projectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporaryInput">temporaryInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationsInput">variationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationTypeInput">variationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archived">archived</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippet">includeInSnippet</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerId">maintainerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKey">maintainerTeamKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporary">temporary</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationType">variationType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientSideAvailability`<sup>Required</sup> <a name="clientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailability"></a>

```java
public FeatureFlagClientSideAvailabilityList getClientSideAvailability();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList">FeatureFlagClientSideAvailabilityList</a>

---

##### `customProperties`<sup>Required</sup> <a name="customProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customProperties"></a>

```java
public FeatureFlagCustomPropertiesList getCustomProperties();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList">FeatureFlagCustomPropertiesList</a>

---

##### `defaults`<sup>Required</sup> <a name="defaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaults"></a>

```java
public FeatureFlagDefaultsOutputReference getDefaults();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference">FeatureFlagDefaultsOutputReference</a>

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variations"></a>

```java
public FeatureFlagVariationsList getVariations();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList">FeatureFlagVariationsList</a>

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archivedInput"></a>

```java
public java.lang.Boolean|IResolvable getArchivedInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientSideAvailabilityInput`<sup>Optional</sup> <a name="clientSideAvailabilityInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailabilityInput"></a>

```java
public IResolvable|java.util.List<FeatureFlagClientSideAvailability> getClientSideAvailabilityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>>

---

##### `customPropertiesInput`<sup>Optional</sup> <a name="customPropertiesInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customPropertiesInput"></a>

```java
public IResolvable|java.util.List<FeatureFlagCustomProperties> getCustomPropertiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>>

---

##### `defaultsInput`<sup>Optional</sup> <a name="defaultsInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaultsInput"></a>

```java
public FeatureFlagDefaults getDefaultsInput();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeInSnippetInput`<sup>Optional</sup> <a name="includeInSnippetInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippetInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeInSnippetInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `maintainerIdInput`<sup>Optional</sup> <a name="maintainerIdInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerIdInput"></a>

```java
public java.lang.String getMaintainerIdInput();
```

- *Type:* java.lang.String

---

##### `maintainerTeamKeyInput`<sup>Optional</sup> <a name="maintainerTeamKeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKeyInput"></a>

```java
public java.lang.String getMaintainerTeamKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKeyInput"></a>

```java
public java.lang.String getProjectKeyInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `temporaryInput`<sup>Optional</sup> <a name="temporaryInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporaryInput"></a>

```java
public java.lang.Boolean|IResolvable getTemporaryInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `variationsInput`<sup>Optional</sup> <a name="variationsInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationsInput"></a>

```java
public IResolvable|java.util.List<FeatureFlagVariations> getVariationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>>

---

##### `variationTypeInput`<sup>Optional</sup> <a name="variationTypeInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationTypeInput"></a>

```java
public java.lang.String getVariationTypeInput();
```

- *Type:* java.lang.String

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archived"></a>

```java
public java.lang.Boolean|IResolvable getArchived();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeInSnippet`<sup>Required</sup> <a name="includeInSnippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippet"></a>

```java
public java.lang.Boolean|IResolvable getIncludeInSnippet();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `maintainerId`<sup>Required</sup> <a name="maintainerId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerId"></a>

```java
public java.lang.String getMaintainerId();
```

- *Type:* java.lang.String

---

##### `maintainerTeamKey`<sup>Required</sup> <a name="maintainerTeamKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerTeamKey"></a>

```java
public java.lang.String getMaintainerTeamKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `temporary`<sup>Required</sup> <a name="temporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporary"></a>

```java
public java.lang.Boolean|IResolvable getTemporary();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `variationType`<sup>Required</sup> <a name="variationType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationType"></a>

```java
public java.lang.String getVariationType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureFlagClientSideAvailability <a name="FeatureFlagClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlagClientSideAvailability;

FeatureFlagClientSideAvailability.builder()
//  .usingEnvironmentId(java.lang.Boolean|IResolvable)
//  .usingMobileKey(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingEnvironmentId">usingEnvironmentId</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether this flag is available to SDKs using the client-side ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingMobileKey">usingMobileKey</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether this flag is available to SDKs using a mobile key. |

---

##### `usingEnvironmentId`<sup>Optional</sup> <a name="usingEnvironmentId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingEnvironmentId"></a>

```java
public java.lang.Boolean|IResolvable getUsingEnvironmentId();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether this flag is available to SDKs using the client-side ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#using_environment_id FeatureFlag#using_environment_id}

---

##### `usingMobileKey`<sup>Optional</sup> <a name="usingMobileKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingMobileKey"></a>

```java
public java.lang.Boolean|IResolvable getUsingMobileKey();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether this flag is available to SDKs using a mobile key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#using_mobile_key FeatureFlag#using_mobile_key}

---

### FeatureFlagConfig <a name="FeatureFlagConfig" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlagConfig;

FeatureFlagConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .key(java.lang.String)
    .name(java.lang.String)
    .projectKey(java.lang.String)
    .variationType(java.lang.String)
//  .archived(java.lang.Boolean|IResolvable)
//  .clientSideAvailability(IResolvable|java.util.List<FeatureFlagClientSideAvailability>)
//  .customProperties(IResolvable|java.util.List<FeatureFlagCustomProperties>)
//  .defaults(FeatureFlagDefaults)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .includeInSnippet(java.lang.Boolean|IResolvable)
//  .maintainerId(java.lang.String)
//  .maintainerTeamKey(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .temporary(java.lang.Boolean|IResolvable)
//  .variations(IResolvable|java.util.List<FeatureFlagVariations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.key">key</a></code> | <code>java.lang.String</code> | The unique feature flag key that references the flag in your application code. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.name">name</a></code> | <code>java.lang.String</code> | The human-readable name of the feature flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | The feature flag's project key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variationType">variationType</a></code> | <code>java.lang.String</code> | The feature flag's variation type: `boolean`, `string`, `number` or `json`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.archived">archived</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether the flag is archived or not. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.clientSideAvailability">clientSideAvailability</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>></code> | client_side_availability block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.customProperties">customProperties</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>></code> | custom_properties block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.defaults">defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | defaults block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.description">description</a></code> | <code>java.lang.String</code> | The feature flag's description. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#id FeatureFlag#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.includeInSnippet">includeInSnippet</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether this flag should be made available to the client-side JavaScript SDK using the client-side Id. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerId">maintainerId</a></code> | <code>java.lang.String</code> | The feature flag maintainer's 24 character alphanumeric team member ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerTeamKey">maintainerTeamKey</a></code> | <code>java.lang.String</code> | The key of the associated team that maintains this feature flag. `maintainer_id` cannot be set if `maintainer_team_key` is set. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.temporary">temporary</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether the flag is a temporary flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variations">variations</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>></code> | variations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The unique feature flag key that references the flag in your application code.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#key FeatureFlag#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The human-readable name of the feature flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#name FeatureFlag#name}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

The feature flag's project key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#project_key FeatureFlag#project_key}

---

##### `variationType`<sup>Required</sup> <a name="variationType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variationType"></a>

```java
public java.lang.String getVariationType();
```

- *Type:* java.lang.String

The feature flag's variation type: `boolean`, `string`, `number` or `json`.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#variation_type FeatureFlag#variation_type}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.archived"></a>

```java
public java.lang.Boolean|IResolvable getArchived();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether the flag is archived or not.

Note that you cannot create a new flag that is archived, but can update a flag to be archived.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#archived FeatureFlag#archived}

---

##### `clientSideAvailability`<sup>Optional</sup> <a name="clientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.clientSideAvailability"></a>

```java
public IResolvable|java.util.List<FeatureFlagClientSideAvailability> getClientSideAvailability();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>>

client_side_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#client_side_availability FeatureFlag#client_side_availability}

---

##### `customProperties`<sup>Optional</sup> <a name="customProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.customProperties"></a>

```java
public IResolvable|java.util.List<FeatureFlagCustomProperties> getCustomProperties();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>>

custom_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#custom_properties FeatureFlag#custom_properties}

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.defaults"></a>

```java
public FeatureFlagDefaults getDefaults();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#defaults FeatureFlag#defaults}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The feature flag's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#description FeatureFlag#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#id FeatureFlag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeInSnippet`<sup>Optional</sup> <a name="includeInSnippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.includeInSnippet"></a>

```java
public java.lang.Boolean|IResolvable getIncludeInSnippet();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether this flag should be made available to the client-side JavaScript SDK using the client-side Id.

This value gets its default from your project configuration if not set. `include_in_snippet` is now deprecated. Please migrate to `client_side_availability.using_environment_id` to maintain future compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#include_in_snippet FeatureFlag#include_in_snippet}

---

##### `maintainerId`<sup>Optional</sup> <a name="maintainerId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerId"></a>

```java
public java.lang.String getMaintainerId();
```

- *Type:* java.lang.String

The feature flag maintainer's 24 character alphanumeric team member ID.

`maintainer_team_key` cannot be set if `maintainer_id` is set. If neither is set, it will automatically be or stay set to the member ID associated with the API key used by your LaunchDarkly Terraform provider or the most recently-set maintainer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#maintainer_id FeatureFlag#maintainer_id}

---

##### `maintainerTeamKey`<sup>Optional</sup> <a name="maintainerTeamKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerTeamKey"></a>

```java
public java.lang.String getMaintainerTeamKey();
```

- *Type:* java.lang.String

The key of the associated team that maintains this feature flag. `maintainer_id` cannot be set if `maintainer_team_key` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#maintainer_team_key FeatureFlag#maintainer_team_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#tags FeatureFlag#tags}

---

##### `temporary`<sup>Optional</sup> <a name="temporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.temporary"></a>

```java
public java.lang.Boolean|IResolvable getTemporary();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether the flag is a temporary flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#temporary FeatureFlag#temporary}

---

##### `variations`<sup>Optional</sup> <a name="variations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variations"></a>

```java
public IResolvable|java.util.List<FeatureFlagVariations> getVariations();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>>

variations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#variations FeatureFlag#variations}

---

### FeatureFlagCustomProperties <a name="FeatureFlagCustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlagCustomProperties;

FeatureFlagCustomProperties.builder()
    .key(java.lang.String)
    .name(java.lang.String)
    .value(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.key">key</a></code> | <code>java.lang.String</code> | The unique custom property key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.name">name</a></code> | <code>java.lang.String</code> | The name of the custom property. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | The list of custom property value strings. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The unique custom property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#key FeatureFlag#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the custom property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#name FeatureFlag#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

The list of custom property value strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#value FeatureFlag#value}

---

### FeatureFlagDefaults <a name="FeatureFlagDefaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlagDefaults;

FeatureFlagDefaults.builder()
    .offVariation(java.lang.Number)
    .onVariation(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.offVariation">offVariation</a></code> | <code>java.lang.Number</code> | The index of the variation the flag will default to in all new environments when off. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.onVariation">onVariation</a></code> | <code>java.lang.Number</code> | The index of the variation the flag will default to in all new environments when on. |

---

##### `offVariation`<sup>Required</sup> <a name="offVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.offVariation"></a>

```java
public java.lang.Number getOffVariation();
```

- *Type:* java.lang.Number

The index of the variation the flag will default to in all new environments when off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#off_variation FeatureFlag#off_variation}

---

##### `onVariation`<sup>Required</sup> <a name="onVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.onVariation"></a>

```java
public java.lang.Number getOnVariation();
```

- *Type:* java.lang.Number

The index of the variation the flag will default to in all new environments when on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#on_variation FeatureFlag#on_variation}

---

### FeatureFlagVariations <a name="FeatureFlagVariations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlagVariations;

FeatureFlagVariations.builder()
    .value(java.lang.String)
//  .description(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.value">value</a></code> | <code>java.lang.String</code> | The variation value. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.description">description</a></code> | <code>java.lang.String</code> | The variation's description. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.name">name</a></code> | <code>java.lang.String</code> | The name of the variation. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The variation value.

The value's type must correspond to the `variation_type` argument. For example: `variation_type = "boolean"` accepts only `true` or `false`. The `number` variation type accepts both floats and ints, but please note that any trailing zeroes on floats will be trimmed (i.e. `1.1` and `1.100` will both be converted to `1.1`).

If you wish to define an empty string variation, you must still define the value field on the variations block like so:

```terraform
variations {
  value = ""
}
```

-> **Note:** Terraform manages `variations` as an ordered array and identifies them by index. This means that if you change the order of your `variations` block, you may end up destroying and recreating those variations. Additionally, if you delete variations that have targets that have been attached outside of Terraform, those targets may be incorrectly reassigned to a different variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#value FeatureFlag#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The variation's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#description FeatureFlag#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/feature_flag#name FeatureFlag#name}

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureFlagClientSideAvailabilityList <a name="FeatureFlagClientSideAvailabilityList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlagClientSideAvailabilityList;

new FeatureFlagClientSideAvailabilityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get"></a>

```java
public FeatureFlagClientSideAvailabilityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FeatureFlagClientSideAvailability> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>>

---


### FeatureFlagClientSideAvailabilityOutputReference <a name="FeatureFlagClientSideAvailabilityOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlagClientSideAvailabilityOutputReference;

new FeatureFlagClientSideAvailabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingEnvironmentId">resetUsingEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingMobileKey">resetUsingMobileKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUsingEnvironmentId` <a name="resetUsingEnvironmentId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingEnvironmentId"></a>

```java
public void resetUsingEnvironmentId()
```

##### `resetUsingMobileKey` <a name="resetUsingMobileKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingMobileKey"></a>

```java
public void resetUsingMobileKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput">usingEnvironmentIdInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKeyInput">usingMobileKeyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentId">usingEnvironmentId</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKey">usingMobileKey</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `usingEnvironmentIdInput`<sup>Optional</sup> <a name="usingEnvironmentIdInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput"></a>

```java
public java.lang.Boolean|IResolvable getUsingEnvironmentIdInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `usingMobileKeyInput`<sup>Optional</sup> <a name="usingMobileKeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKeyInput"></a>

```java
public java.lang.Boolean|IResolvable getUsingMobileKeyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `usingEnvironmentId`<sup>Required</sup> <a name="usingEnvironmentId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentId"></a>

```java
public java.lang.Boolean|IResolvable getUsingEnvironmentId();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `usingMobileKey`<sup>Required</sup> <a name="usingMobileKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKey"></a>

```java
public java.lang.Boolean|IResolvable getUsingMobileKey();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureFlagClientSideAvailability getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>

---


### FeatureFlagCustomPropertiesList <a name="FeatureFlagCustomPropertiesList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlagCustomPropertiesList;

new FeatureFlagCustomPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get"></a>

```java
public FeatureFlagCustomPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FeatureFlagCustomProperties> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>>

---


### FeatureFlagCustomPropertiesOutputReference <a name="FeatureFlagCustomPropertiesOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlagCustomPropertiesOutputReference;

new FeatureFlagCustomPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.valueInput">valueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.valueInput"></a>

```java
public java.util.List<java.lang.String> getValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureFlagCustomProperties getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>

---


### FeatureFlagDefaultsOutputReference <a name="FeatureFlagDefaultsOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlagDefaultsOutputReference;

new FeatureFlagDefaultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariationInput">offVariationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariationInput">onVariationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariation">offVariation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariation">onVariation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offVariationInput`<sup>Optional</sup> <a name="offVariationInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariationInput"></a>

```java
public java.lang.Number getOffVariationInput();
```

- *Type:* java.lang.Number

---

##### `onVariationInput`<sup>Optional</sup> <a name="onVariationInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariationInput"></a>

```java
public java.lang.Number getOnVariationInput();
```

- *Type:* java.lang.Number

---

##### `offVariation`<sup>Required</sup> <a name="offVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariation"></a>

```java
public java.lang.Number getOffVariation();
```

- *Type:* java.lang.Number

---

##### `onVariation`<sup>Required</sup> <a name="onVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariation"></a>

```java
public java.lang.Number getOnVariation();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.internalValue"></a>

```java
public FeatureFlagDefaults getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

---


### FeatureFlagVariationsList <a name="FeatureFlagVariationsList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlagVariationsList;

new FeatureFlagVariationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get"></a>

```java
public FeatureFlagVariationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FeatureFlagVariations> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>>

---


### FeatureFlagVariationsOutputReference <a name="FeatureFlagVariationsOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag.FeatureFlagVariationsOutputReference;

new FeatureFlagVariationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.internalValue"></a>

```java
public IResolvable|FeatureFlagVariations getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>

---



