# `launchdarkly_feature_flag_environment`

Refer to the Terraform Registory for docs: [`launchdarkly_feature_flag_environment`](https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment).

# `featureFlagEnvironment` Submodule <a name="`featureFlagEnvironment` Submodule" id="@cdktf/provider-launchdarkly.featureFlagEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureFlagEnvironment <a name="FeatureFlagEnvironment" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment launchdarkly_feature_flag_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironment;

FeatureFlagEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .envKey(java.lang.String)
    .fallthrough(FeatureFlagEnvironmentFallthrough)
    .flagId(java.lang.String)
    .offVariation(java.lang.Number)
//  .contextTargets(IResolvable)
//  .contextTargets(java.util.List<FeatureFlagEnvironmentContextTargets>)
//  .id(java.lang.String)
//  .on(java.lang.Boolean)
//  .on(IResolvable)
//  .prerequisites(IResolvable)
//  .prerequisites(java.util.List<FeatureFlagEnvironmentPrerequisites>)
//  .rules(IResolvable)
//  .rules(java.util.List<FeatureFlagEnvironmentRules>)
//  .targets(IResolvable)
//  .targets(java.util.List<FeatureFlagEnvironmentTargets>)
//  .trackEvents(java.lang.Boolean)
//  .trackEvents(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.envKey">envKey</a></code> | <code>java.lang.String</code> | The LaunchDarkly environment key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.fallthrough">fallthrough</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a></code> | fallthrough block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.flagId">flagId</a></code> | <code>java.lang.String</code> | The global feature flag's unique id in the format `<project_key>/<flag_key>`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.offVariation">offVariation</a></code> | <code>java.lang.Number</code> | The index of the variation to serve if targeting is disabled. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.contextTargets">contextTargets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>></code> | context_targets block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#id FeatureFlagEnvironment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.on">on</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether targeting is enabled. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.prerequisites">prerequisites</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>></code> | prerequisites block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.targets">targets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>></code> | targets block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.trackEvents">trackEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to send event data back to LaunchDarkly. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `envKey`<sup>Required</sup> <a name="envKey" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.envKey"></a>

- *Type:* java.lang.String

The LaunchDarkly environment key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#env_key FeatureFlagEnvironment#env_key}

---

##### `fallthrough`<sup>Required</sup> <a name="fallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.fallthrough"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

fallthrough block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#fallthrough FeatureFlagEnvironment#fallthrough}

---

##### `flagId`<sup>Required</sup> <a name="flagId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.flagId"></a>

- *Type:* java.lang.String

The global feature flag's unique id in the format `<project_key>/<flag_key>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#flag_id FeatureFlagEnvironment#flag_id}

---

##### `offVariation`<sup>Required</sup> <a name="offVariation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.offVariation"></a>

- *Type:* java.lang.Number

The index of the variation to serve if targeting is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#off_variation FeatureFlagEnvironment#off_variation}

---

##### `contextTargets`<sup>Optional</sup> <a name="contextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.contextTargets"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>>

context_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#context_targets FeatureFlagEnvironment#context_targets}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#id FeatureFlagEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on`<sup>Optional</sup> <a name="on" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.on"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether targeting is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#on FeatureFlagEnvironment#on}

---

##### `prerequisites`<sup>Optional</sup> <a name="prerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.prerequisites"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>>

prerequisites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#prerequisites FeatureFlagEnvironment#prerequisites}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#rules FeatureFlagEnvironment#rules}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.targets"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>>

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#targets FeatureFlagEnvironment#targets}

---

##### `trackEvents`<sup>Optional</sup> <a name="trackEvents" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.trackEvents"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to send event data back to LaunchDarkly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#track_events FeatureFlagEnvironment#track_events}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putContextTargets">putContextTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putFallthrough">putFallthrough</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putPrerequisites">putPrerequisites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetContextTargets">resetContextTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetOn">resetOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetPrerequisites">resetPrerequisites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetTargets">resetTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetTrackEvents">resetTrackEvents</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putContextTargets` <a name="putContextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putContextTargets"></a>

```java
public void putContextTargets(IResolvable OR java.util.List<FeatureFlagEnvironmentContextTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putContextTargets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>>

---

##### `putFallthrough` <a name="putFallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putFallthrough"></a>

```java
public void putFallthrough(FeatureFlagEnvironmentFallthrough value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putFallthrough.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

---

##### `putPrerequisites` <a name="putPrerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putPrerequisites"></a>

```java
public void putPrerequisites(IResolvable OR java.util.List<FeatureFlagEnvironmentPrerequisites> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putPrerequisites.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<FeatureFlagEnvironmentRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>>

---

##### `putTargets` <a name="putTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putTargets"></a>

```java
public void putTargets(IResolvable OR java.util.List<FeatureFlagEnvironmentTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putTargets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>>

---

##### `resetContextTargets` <a name="resetContextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetContextTargets"></a>

```java
public void resetContextTargets()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetId"></a>

```java
public void resetId()
```

##### `resetOn` <a name="resetOn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetOn"></a>

```java
public void resetOn()
```

##### `resetPrerequisites` <a name="resetPrerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetPrerequisites"></a>

```java
public void resetPrerequisites()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetRules"></a>

```java
public void resetRules()
```

##### `resetTargets` <a name="resetTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetTargets"></a>

```java
public void resetTargets()
```

##### `resetTrackEvents` <a name="resetTrackEvents" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetTrackEvents"></a>

```java
public void resetTrackEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironment;

FeatureFlagEnvironment.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironment;

FeatureFlagEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironment;

FeatureFlagEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargets">contextTargets</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList">FeatureFlagEnvironmentContextTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthrough">fallthrough</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference">FeatureFlagEnvironmentFallthroughOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisites">prerequisites</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList">FeatureFlagEnvironmentPrerequisitesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList">FeatureFlagEnvironmentRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList">FeatureFlagEnvironmentTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargetsInput">contextTargetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKeyInput">envKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthroughInput">fallthroughInput</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagIdInput">flagIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariationInput">offVariationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.onInput">onInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisitesInput">prerequisitesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targetsInput">targetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEventsInput">trackEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKey">envKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagId">flagId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariation">offVariation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.on">on</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEvents">trackEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contextTargets`<sup>Required</sup> <a name="contextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargets"></a>

```java
public FeatureFlagEnvironmentContextTargetsList getContextTargets();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList">FeatureFlagEnvironmentContextTargetsList</a>

---

##### `fallthrough`<sup>Required</sup> <a name="fallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthrough"></a>

```java
public FeatureFlagEnvironmentFallthroughOutputReference getFallthrough();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference">FeatureFlagEnvironmentFallthroughOutputReference</a>

---

##### `prerequisites`<sup>Required</sup> <a name="prerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisites"></a>

```java
public FeatureFlagEnvironmentPrerequisitesList getPrerequisites();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList">FeatureFlagEnvironmentPrerequisitesList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rules"></a>

```java
public FeatureFlagEnvironmentRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList">FeatureFlagEnvironmentRulesList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targets"></a>

```java
public FeatureFlagEnvironmentTargetsList getTargets();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList">FeatureFlagEnvironmentTargetsList</a>

---

##### `contextTargetsInput`<sup>Optional</sup> <a name="contextTargetsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargetsInput"></a>

```java
public java.lang.Object getContextTargetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>>

---

##### `envKeyInput`<sup>Optional</sup> <a name="envKeyInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKeyInput"></a>

```java
public java.lang.String getEnvKeyInput();
```

- *Type:* java.lang.String

---

##### `fallthroughInput`<sup>Optional</sup> <a name="fallthroughInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthroughInput"></a>

```java
public FeatureFlagEnvironmentFallthrough getFallthroughInput();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

---

##### `flagIdInput`<sup>Optional</sup> <a name="flagIdInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagIdInput"></a>

```java
public java.lang.String getFlagIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `offVariationInput`<sup>Optional</sup> <a name="offVariationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariationInput"></a>

```java
public java.lang.Number getOffVariationInput();
```

- *Type:* java.lang.Number

---

##### `onInput`<sup>Optional</sup> <a name="onInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.onInput"></a>

```java
public java.lang.Object getOnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prerequisitesInput`<sup>Optional</sup> <a name="prerequisitesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisitesInput"></a>

```java
public java.lang.Object getPrerequisitesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targetsInput"></a>

```java
public java.lang.Object getTargetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>>

---

##### `trackEventsInput`<sup>Optional</sup> <a name="trackEventsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEventsInput"></a>

```java
public java.lang.Object getTrackEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `envKey`<sup>Required</sup> <a name="envKey" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKey"></a>

```java
public java.lang.String getEnvKey();
```

- *Type:* java.lang.String

---

##### `flagId`<sup>Required</sup> <a name="flagId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagId"></a>

```java
public java.lang.String getFlagId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `offVariation`<sup>Required</sup> <a name="offVariation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariation"></a>

```java
public java.lang.Number getOffVariation();
```

- *Type:* java.lang.Number

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.on"></a>

```java
public java.lang.Object getOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `trackEvents`<sup>Required</sup> <a name="trackEvents" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEvents"></a>

```java
public java.lang.Object getTrackEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureFlagEnvironmentConfig <a name="FeatureFlagEnvironmentConfig" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentConfig;

FeatureFlagEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .envKey(java.lang.String)
    .fallthrough(FeatureFlagEnvironmentFallthrough)
    .flagId(java.lang.String)
    .offVariation(java.lang.Number)
//  .contextTargets(IResolvable)
//  .contextTargets(java.util.List<FeatureFlagEnvironmentContextTargets>)
//  .id(java.lang.String)
//  .on(java.lang.Boolean)
//  .on(IResolvable)
//  .prerequisites(IResolvable)
//  .prerequisites(java.util.List<FeatureFlagEnvironmentPrerequisites>)
//  .rules(IResolvable)
//  .rules(java.util.List<FeatureFlagEnvironmentRules>)
//  .targets(IResolvable)
//  .targets(java.util.List<FeatureFlagEnvironmentTargets>)
//  .trackEvents(java.lang.Boolean)
//  .trackEvents(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.envKey">envKey</a></code> | <code>java.lang.String</code> | The LaunchDarkly environment key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.fallthrough">fallthrough</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a></code> | fallthrough block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.flagId">flagId</a></code> | <code>java.lang.String</code> | The global feature flag's unique id in the format `<project_key>/<flag_key>`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.offVariation">offVariation</a></code> | <code>java.lang.Number</code> | The index of the variation to serve if targeting is disabled. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.contextTargets">contextTargets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>></code> | context_targets block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#id FeatureFlagEnvironment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.on">on</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether targeting is enabled. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.prerequisites">prerequisites</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>></code> | prerequisites block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.targets">targets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>></code> | targets block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.trackEvents">trackEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to send event data back to LaunchDarkly. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `envKey`<sup>Required</sup> <a name="envKey" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.envKey"></a>

```java
public java.lang.String getEnvKey();
```

- *Type:* java.lang.String

The LaunchDarkly environment key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#env_key FeatureFlagEnvironment#env_key}

---

##### `fallthrough`<sup>Required</sup> <a name="fallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.fallthrough"></a>

```java
public FeatureFlagEnvironmentFallthrough getFallthrough();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

fallthrough block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#fallthrough FeatureFlagEnvironment#fallthrough}

---

##### `flagId`<sup>Required</sup> <a name="flagId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.flagId"></a>

```java
public java.lang.String getFlagId();
```

- *Type:* java.lang.String

The global feature flag's unique id in the format `<project_key>/<flag_key>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#flag_id FeatureFlagEnvironment#flag_id}

---

##### `offVariation`<sup>Required</sup> <a name="offVariation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.offVariation"></a>

```java
public java.lang.Number getOffVariation();
```

- *Type:* java.lang.Number

The index of the variation to serve if targeting is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#off_variation FeatureFlagEnvironment#off_variation}

---

##### `contextTargets`<sup>Optional</sup> <a name="contextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.contextTargets"></a>

```java
public java.lang.Object getContextTargets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>>

context_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#context_targets FeatureFlagEnvironment#context_targets}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#id FeatureFlagEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on`<sup>Optional</sup> <a name="on" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.on"></a>

```java
public java.lang.Object getOn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether targeting is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#on FeatureFlagEnvironment#on}

---

##### `prerequisites`<sup>Optional</sup> <a name="prerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.prerequisites"></a>

```java
public java.lang.Object getPrerequisites();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>>

prerequisites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#prerequisites FeatureFlagEnvironment#prerequisites}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#rules FeatureFlagEnvironment#rules}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.targets"></a>

```java
public java.lang.Object getTargets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>>

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#targets FeatureFlagEnvironment#targets}

---

##### `trackEvents`<sup>Optional</sup> <a name="trackEvents" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.trackEvents"></a>

```java
public java.lang.Object getTrackEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to send event data back to LaunchDarkly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#track_events FeatureFlagEnvironment#track_events}

---

### FeatureFlagEnvironmentContextTargets <a name="FeatureFlagEnvironmentContextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentContextTargets;

FeatureFlagEnvironmentContextTargets.builder()
    .contextKind(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .variation(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.contextKind">contextKind</a></code> | <code>java.lang.String</code> | The context kind on which the flag should target in this environment. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | List of user strings to target. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.variation">variation</a></code> | <code>java.lang.Number</code> | Index of the variation to serve if a user_target is matched. |

---

##### `contextKind`<sup>Required</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.contextKind"></a>

```java
public java.lang.String getContextKind();
```

- *Type:* java.lang.String

The context kind on which the flag should target in this environment.

If the context_kind has not been previously specified at the project level, it will be automatically created on the project. User targets should be specified as targets attribute blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

List of user strings to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.variation"></a>

```java
public java.lang.Number getVariation();
```

- *Type:* java.lang.Number

Index of the variation to serve if a user_target is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentFallthrough <a name="FeatureFlagEnvironmentFallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentFallthrough;

FeatureFlagEnvironmentFallthrough.builder()
//  .bucketBy(java.lang.String)
//  .contextKind(java.lang.String)
//  .rolloutWeights(java.util.List<java.lang.Number>)
//  .variation(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.bucketBy">bucketBy</a></code> | <code>java.lang.String</code> | Group percentage rollout by a custom attribute. This argument is only valid if rollout_weights is also specified. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.contextKind">contextKind</a></code> | <code>java.lang.String</code> | The context kind associated with the specified rollout. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.rolloutWeights">rolloutWeights</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#rollout_weights FeatureFlagEnvironment#rollout_weights}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.variation">variation</a></code> | <code>java.lang.Number</code> | The integer variation index to serve in case of fallthrough. |

---

##### `bucketBy`<sup>Optional</sup> <a name="bucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.bucketBy"></a>

```java
public java.lang.String getBucketBy();
```

- *Type:* java.lang.String

Group percentage rollout by a custom attribute. This argument is only valid if rollout_weights is also specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#bucket_by FeatureFlagEnvironment#bucket_by}

---

##### `contextKind`<sup>Optional</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.contextKind"></a>

```java
public java.lang.String getContextKind();
```

- *Type:* java.lang.String

The context kind associated with the specified rollout.

This argument is only valid if rollout_weights is also specified. If omitted, defaults to 'user'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}

---

##### `rolloutWeights`<sup>Optional</sup> <a name="rolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.rolloutWeights"></a>

```java
public java.util.List<java.lang.Number> getRolloutWeights();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#rollout_weights FeatureFlagEnvironment#rollout_weights}.

---

##### `variation`<sup>Optional</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.variation"></a>

```java
public java.lang.Number getVariation();
```

- *Type:* java.lang.Number

The integer variation index to serve in case of fallthrough.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentPrerequisites <a name="FeatureFlagEnvironmentPrerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentPrerequisites;

FeatureFlagEnvironmentPrerequisites.builder()
    .flagKey(java.lang.String)
    .variation(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.flagKey">flagKey</a></code> | <code>java.lang.String</code> | The prerequisite feature flag's key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.variation">variation</a></code> | <code>java.lang.Number</code> | The index of the prerequisite feature flag's variation to target. |

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.flagKey"></a>

```java
public java.lang.String getFlagKey();
```

- *Type:* java.lang.String

The prerequisite feature flag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#flag_key FeatureFlagEnvironment#flag_key}

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.variation"></a>

```java
public java.lang.Number getVariation();
```

- *Type:* java.lang.Number

The index of the prerequisite feature flag's variation to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentRules <a name="FeatureFlagEnvironmentRules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentRules;

FeatureFlagEnvironmentRules.builder()
//  .bucketBy(java.lang.String)
//  .clauses(IResolvable)
//  .clauses(java.util.List<FeatureFlagEnvironmentRulesClauses>)
//  .description(java.lang.String)
//  .rolloutWeights(java.util.List<java.lang.Number>)
//  .variation(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.bucketBy">bucketBy</a></code> | <code>java.lang.String</code> | Group percentage rollout by a custom attribute. This argument is only valid if rollout_weights is also specified. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.clauses">clauses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>></code> | clauses block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the targeting rule. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.rolloutWeights">rolloutWeights</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#rollout_weights FeatureFlagEnvironment#rollout_weights}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.variation">variation</a></code> | <code>java.lang.Number</code> | The integer variation index to serve if the rule clauses evaluate to true. |

---

##### `bucketBy`<sup>Optional</sup> <a name="bucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.bucketBy"></a>

```java
public java.lang.String getBucketBy();
```

- *Type:* java.lang.String

Group percentage rollout by a custom attribute. This argument is only valid if rollout_weights is also specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#bucket_by FeatureFlagEnvironment#bucket_by}

---

##### `clauses`<sup>Optional</sup> <a name="clauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.clauses"></a>

```java
public java.lang.Object getClauses();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>>

clauses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#clauses FeatureFlagEnvironment#clauses}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the targeting rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#description FeatureFlagEnvironment#description}

---

##### `rolloutWeights`<sup>Optional</sup> <a name="rolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.rolloutWeights"></a>

```java
public java.util.List<java.lang.Number> getRolloutWeights();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#rollout_weights FeatureFlagEnvironment#rollout_weights}.

---

##### `variation`<sup>Optional</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.variation"></a>

```java
public java.lang.Number getVariation();
```

- *Type:* java.lang.Number

The integer variation index to serve if the rule clauses evaluate to true.

This argument is only valid if clauses are also specified

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentRulesClauses <a name="FeatureFlagEnvironmentRulesClauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentRulesClauses;

FeatureFlagEnvironmentRulesClauses.builder()
    .attribute(java.lang.String)
    .op(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .contextKind(java.lang.String)
//  .negate(java.lang.Boolean)
//  .negate(IResolvable)
//  .valueType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.attribute">attribute</a></code> | <code>java.lang.String</code> | The user attribute to operate on. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.op">op</a></code> | <code>java.lang.String</code> | The operator associated with the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The list of values associated with the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.contextKind">contextKind</a></code> | <code>java.lang.String</code> | The context kind associated with this rule clause. If omitted, defaults to user. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.negate">negate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to negate the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.valueType">valueType</a></code> | <code>java.lang.String</code> | The type for each of the clause's values. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

The user attribute to operate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#attribute FeatureFlagEnvironment#attribute}

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.op"></a>

```java
public java.lang.String getOp();
```

- *Type:* java.lang.String

The operator associated with the rule clause.

Available options are in, endsWith, startsWith, matches, contains, lessThan, lessThanOrEqual, greaterThanOrEqual, before, after, segmentMatch, semVerEqual, semVerLessThan, and semVerGreaterThan

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#op FeatureFlagEnvironment#op}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The list of values associated with the rule clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}

---

##### `contextKind`<sup>Optional</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.contextKind"></a>

```java
public java.lang.String getContextKind();
```

- *Type:* java.lang.String

The context kind associated with this rule clause. If omitted, defaults to user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.negate"></a>

```java
public java.lang.Object getNegate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to negate the rule clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#negate FeatureFlagEnvironment#negate}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

The type for each of the clause's values.

Available types are boolean, string, and number. If omitted, value_type defaults to string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#value_type FeatureFlagEnvironment#value_type}

---

### FeatureFlagEnvironmentTargets <a name="FeatureFlagEnvironmentTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentTargets;

FeatureFlagEnvironmentTargets.builder()
    .values(java.util.List<java.lang.String>)
    .variation(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | List of user strings to target. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.variation">variation</a></code> | <code>java.lang.Number</code> | Index of the variation to serve if a user_target is matched. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

List of user strings to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.variation"></a>

```java
public java.lang.Number getVariation();
```

- *Type:* java.lang.Number

Index of the variation to serve if a user_target is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.4/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureFlagEnvironmentContextTargetsList <a name="FeatureFlagEnvironmentContextTargetsList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentContextTargetsList;

new FeatureFlagEnvironmentContextTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.get"></a>

```java
public FeatureFlagEnvironmentContextTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>>

---


### FeatureFlagEnvironmentContextTargetsOutputReference <a name="FeatureFlagEnvironmentContextTargetsOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentContextTargetsOutputReference;

new FeatureFlagEnvironmentContextTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKindInput">contextKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variationInput">variationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKind">contextKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variation">variation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contextKindInput`<sup>Optional</sup> <a name="contextKindInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKindInput"></a>

```java
public java.lang.String getContextKindInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variationInput"></a>

```java
public java.lang.Number getVariationInput();
```

- *Type:* java.lang.Number

---

##### `contextKind`<sup>Required</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKind"></a>

```java
public java.lang.String getContextKind();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variation"></a>

```java
public java.lang.Number getVariation();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>

---


### FeatureFlagEnvironmentFallthroughOutputReference <a name="FeatureFlagEnvironmentFallthroughOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentFallthroughOutputReference;

new FeatureFlagEnvironmentFallthroughOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetBucketBy">resetBucketBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetContextKind">resetContextKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetRolloutWeights">resetRolloutWeights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetVariation">resetVariation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketBy` <a name="resetBucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetBucketBy"></a>

```java
public void resetBucketBy()
```

##### `resetContextKind` <a name="resetContextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetContextKind"></a>

```java
public void resetContextKind()
```

##### `resetRolloutWeights` <a name="resetRolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetRolloutWeights"></a>

```java
public void resetRolloutWeights()
```

##### `resetVariation` <a name="resetVariation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetVariation"></a>

```java
public void resetVariation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketByInput">bucketByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKindInput">contextKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeightsInput">rolloutWeightsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variationInput">variationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketBy">bucketBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKind">contextKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeights">rolloutWeights</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variation">variation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketByInput`<sup>Optional</sup> <a name="bucketByInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketByInput"></a>

```java
public java.lang.String getBucketByInput();
```

- *Type:* java.lang.String

---

##### `contextKindInput`<sup>Optional</sup> <a name="contextKindInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKindInput"></a>

```java
public java.lang.String getContextKindInput();
```

- *Type:* java.lang.String

---

##### `rolloutWeightsInput`<sup>Optional</sup> <a name="rolloutWeightsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeightsInput"></a>

```java
public java.util.List<java.lang.Number> getRolloutWeightsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variationInput"></a>

```java
public java.lang.Number getVariationInput();
```

- *Type:* java.lang.Number

---

##### `bucketBy`<sup>Required</sup> <a name="bucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketBy"></a>

```java
public java.lang.String getBucketBy();
```

- *Type:* java.lang.String

---

##### `contextKind`<sup>Required</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKind"></a>

```java
public java.lang.String getContextKind();
```

- *Type:* java.lang.String

---

##### `rolloutWeights`<sup>Required</sup> <a name="rolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeights"></a>

```java
public java.util.List<java.lang.Number> getRolloutWeights();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variation"></a>

```java
public java.lang.Number getVariation();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.internalValue"></a>

```java
public FeatureFlagEnvironmentFallthrough getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

---


### FeatureFlagEnvironmentPrerequisitesList <a name="FeatureFlagEnvironmentPrerequisitesList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentPrerequisitesList;

new FeatureFlagEnvironmentPrerequisitesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.get"></a>

```java
public FeatureFlagEnvironmentPrerequisitesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>>

---


### FeatureFlagEnvironmentPrerequisitesOutputReference <a name="FeatureFlagEnvironmentPrerequisitesOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentPrerequisitesOutputReference;

new FeatureFlagEnvironmentPrerequisitesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKeyInput">flagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variationInput">variationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKey">flagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variation">variation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flagKeyInput`<sup>Optional</sup> <a name="flagKeyInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKeyInput"></a>

```java
public java.lang.String getFlagKeyInput();
```

- *Type:* java.lang.String

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variationInput"></a>

```java
public java.lang.Number getVariationInput();
```

- *Type:* java.lang.Number

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKey"></a>

```java
public java.lang.String getFlagKey();
```

- *Type:* java.lang.String

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variation"></a>

```java
public java.lang.Number getVariation();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>

---


### FeatureFlagEnvironmentRulesClausesList <a name="FeatureFlagEnvironmentRulesClausesList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentRulesClausesList;

new FeatureFlagEnvironmentRulesClausesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.get"></a>

```java
public FeatureFlagEnvironmentRulesClausesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>>

---


### FeatureFlagEnvironmentRulesClausesOutputReference <a name="FeatureFlagEnvironmentRulesClausesOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentRulesClausesOutputReference;

new FeatureFlagEnvironmentRulesClausesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetContextKind">resetContextKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContextKind` <a name="resetContextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetContextKind"></a>

```java
public void resetContextKind()
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetNegate"></a>

```java
public void resetNegate()
```

##### `resetValueType` <a name="resetValueType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetValueType"></a>

```java
public void resetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKindInput">contextKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.opInput">opInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKind">contextKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negate">negate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.op">op</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `contextKindInput`<sup>Optional</sup> <a name="contextKindInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKindInput"></a>

```java
public java.lang.String getContextKindInput();
```

- *Type:* java.lang.String

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negateInput"></a>

```java
public java.lang.Object getNegateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `opInput`<sup>Optional</sup> <a name="opInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.opInput"></a>

```java
public java.lang.String getOpInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `contextKind`<sup>Required</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKind"></a>

```java
public java.lang.String getContextKind();
```

- *Type:* java.lang.String

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negate"></a>

```java
public java.lang.Object getNegate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.op"></a>

```java
public java.lang.String getOp();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>

---


### FeatureFlagEnvironmentRulesList <a name="FeatureFlagEnvironmentRulesList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentRulesList;

new FeatureFlagEnvironmentRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.get"></a>

```java
public FeatureFlagEnvironmentRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>>

---


### FeatureFlagEnvironmentRulesOutputReference <a name="FeatureFlagEnvironmentRulesOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentRulesOutputReference;

new FeatureFlagEnvironmentRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.putClauses">putClauses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetBucketBy">resetBucketBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetClauses">resetClauses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetRolloutWeights">resetRolloutWeights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetVariation">resetVariation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClauses` <a name="putClauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.putClauses"></a>

```java
public void putClauses(IResolvable OR java.util.List<FeatureFlagEnvironmentRulesClauses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.putClauses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>>

---

##### `resetBucketBy` <a name="resetBucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetBucketBy"></a>

```java
public void resetBucketBy()
```

##### `resetClauses` <a name="resetClauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetClauses"></a>

```java
public void resetClauses()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRolloutWeights` <a name="resetRolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetRolloutWeights"></a>

```java
public void resetRolloutWeights()
```

##### `resetVariation` <a name="resetVariation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetVariation"></a>

```java
public void resetVariation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clauses">clauses</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList">FeatureFlagEnvironmentRulesClausesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketByInput">bucketByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clausesInput">clausesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeightsInput">rolloutWeightsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variationInput">variationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketBy">bucketBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeights">rolloutWeights</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variation">variation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clauses`<sup>Required</sup> <a name="clauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clauses"></a>

```java
public FeatureFlagEnvironmentRulesClausesList getClauses();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList">FeatureFlagEnvironmentRulesClausesList</a>

---

##### `bucketByInput`<sup>Optional</sup> <a name="bucketByInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketByInput"></a>

```java
public java.lang.String getBucketByInput();
```

- *Type:* java.lang.String

---

##### `clausesInput`<sup>Optional</sup> <a name="clausesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clausesInput"></a>

```java
public java.lang.Object getClausesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `rolloutWeightsInput`<sup>Optional</sup> <a name="rolloutWeightsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeightsInput"></a>

```java
public java.util.List<java.lang.Number> getRolloutWeightsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variationInput"></a>

```java
public java.lang.Number getVariationInput();
```

- *Type:* java.lang.Number

---

##### `bucketBy`<sup>Required</sup> <a name="bucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketBy"></a>

```java
public java.lang.String getBucketBy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `rolloutWeights`<sup>Required</sup> <a name="rolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeights"></a>

```java
public java.util.List<java.lang.Number> getRolloutWeights();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variation"></a>

```java
public java.lang.Number getVariation();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>

---


### FeatureFlagEnvironmentTargetsList <a name="FeatureFlagEnvironmentTargetsList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentTargetsList;

new FeatureFlagEnvironmentTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.get"></a>

```java
public FeatureFlagEnvironmentTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>>

---


### FeatureFlagEnvironmentTargetsOutputReference <a name="FeatureFlagEnvironmentTargetsOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.feature_flag_environment.FeatureFlagEnvironmentTargetsOutputReference;

new FeatureFlagEnvironmentTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variationInput">variationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variation">variation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variationInput"></a>

```java
public java.lang.Number getVariationInput();
```

- *Type:* java.lang.Number

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variation"></a>

```java
public java.lang.Number getVariation();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>

---



