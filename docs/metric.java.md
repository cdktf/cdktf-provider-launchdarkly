# `metric` Submodule <a name="`metric` Submodule" id="@cdktf/provider-launchdarkly.metric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Metric <a name="Metric" id="@cdktf/provider-launchdarkly.metric.Metric"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric launchdarkly_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.metric.Metric;

Metric.Builder.create(Construct scope, java.lang.String id)
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
    .key(java.lang.String)
    .kind(java.lang.String)
    .name(java.lang.String)
    .projectKey(java.lang.String)
//  .description(java.lang.String)
//  .eventKey(java.lang.String)
//  .id(java.lang.String)
//  .isActive(java.lang.Boolean)
//  .isActive(IResolvable)
//  .isNumeric(java.lang.Boolean)
//  .isNumeric(IResolvable)
//  .maintainerId(java.lang.String)
//  .randomizationUnits(java.util.List<java.lang.String>)
//  .selector(java.lang.String)
//  .successCriteria(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .unit(java.lang.String)
//  .urls(IResolvable)
//  .urls(java.util.List<MetricUrls>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | A unique key that will be used to reference the metric in your code. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | The metric type -available choices are 'pageview', 'click', and 'custom'. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A human-readable name for your metric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.projectKey">projectKey</a></code> | <code>java.lang.String</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A short description of what the metric will be used for. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.eventKey">eventKey</a></code> | <code>java.lang.String</code> | The event key for your metric (if custom metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#id Metric#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.isActive">isActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the metric is active. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.isNumeric">isNumeric</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the metric is numeric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.maintainerId">maintainerId</a></code> | <code>java.lang.String</code> | The LaunchDarkly ID of the user who will maintain the metric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.randomizationUnits">randomizationUnits</a></code> | <code>java.util.List<java.lang.String></code> | A set of one or more context kinds that this metric can measure events from. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.selector">selector</a></code> | <code>java.lang.String</code> | The CSS selector for your metric (if click metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.successCriteria">successCriteria</a></code> | <code>java.lang.String</code> | The success criteria for your metric (if numeric metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.unit">unit</a></code> | <code>java.lang.String</code> | The unit for your metric (if numeric metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.urls">urls</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>></code> | urls block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.key"></a>

- *Type:* java.lang.String

A unique key that will be used to reference the metric in your code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#key Metric#key}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

The metric type -available choices are 'pageview', 'click', and 'custom'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#kind Metric#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A human-readable name for your metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#name Metric#name}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.projectKey"></a>

- *Type:* java.lang.String

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#project_key Metric#project_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A short description of what the metric will be used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#description Metric#description}

---

##### `eventKey`<sup>Optional</sup> <a name="eventKey" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.eventKey"></a>

- *Type:* java.lang.String

The event key for your metric (if custom metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#event_key Metric#event_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#id Metric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.isActive"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the metric is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#is_active Metric#is_active}

---

##### `isNumeric`<sup>Optional</sup> <a name="isNumeric" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.isNumeric"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the metric is numeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#is_numeric Metric#is_numeric}

---

##### `maintainerId`<sup>Optional</sup> <a name="maintainerId" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.maintainerId"></a>

- *Type:* java.lang.String

The LaunchDarkly ID of the user who will maintain the metric.

If not set, the API will automatically apply the member associated with your Terraform API key or the most recently-set maintainer

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#maintainer_id Metric#maintainer_id}

---

##### `randomizationUnits`<sup>Optional</sup> <a name="randomizationUnits" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.randomizationUnits"></a>

- *Type:* java.util.List<java.lang.String>

A set of one or more context kinds that this metric can measure events from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#randomization_units Metric#randomization_units}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.selector"></a>

- *Type:* java.lang.String

The CSS selector for your metric (if click metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#selector Metric#selector}

---

##### `successCriteria`<sup>Optional</sup> <a name="successCriteria" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.successCriteria"></a>

- *Type:* java.lang.String

The success criteria for your metric (if numeric metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#success_criteria Metric#success_criteria}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#tags Metric#tags}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.unit"></a>

- *Type:* java.lang.String

The unit for your metric (if numeric metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#unit Metric#unit}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-launchdarkly.metric.Metric.Initializer.parameter.urls"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>>

urls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#urls Metric#urls}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.putUrls">putUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetEventKey">resetEventKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetIsActive">resetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetIsNumeric">resetIsNumeric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetMaintainerId">resetMaintainerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetRandomizationUnits">resetRandomizationUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetSuccessCriteria">resetSuccessCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.resetUrls">resetUrls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.metric.Metric.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.metric.Metric.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.metric.Metric.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.metric.Metric.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.metric.Metric.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.metric.Metric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.metric.Metric.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-launchdarkly.metric.Metric.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.metric.Metric.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.metric.Metric.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-launchdarkly.metric.Metric.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.metric.Metric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-launchdarkly.metric.Metric.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-launchdarkly.metric.Metric.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.metric.Metric.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.Metric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-launchdarkly.metric.Metric.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-launchdarkly.metric.Metric.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.metric.Metric.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.metric.Metric.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-launchdarkly.metric.Metric.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putUrls` <a name="putUrls" id="@cdktf/provider-launchdarkly.metric.Metric.putUrls"></a>

```java
public void putUrls(IResolvable OR java.util.List<MetricUrls> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.metric.Metric.putUrls.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-launchdarkly.metric.Metric.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEventKey` <a name="resetEventKey" id="@cdktf/provider-launchdarkly.metric.Metric.resetEventKey"></a>

```java
public void resetEventKey()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.metric.Metric.resetId"></a>

```java
public void resetId()
```

##### `resetIsActive` <a name="resetIsActive" id="@cdktf/provider-launchdarkly.metric.Metric.resetIsActive"></a>

```java
public void resetIsActive()
```

##### `resetIsNumeric` <a name="resetIsNumeric" id="@cdktf/provider-launchdarkly.metric.Metric.resetIsNumeric"></a>

```java
public void resetIsNumeric()
```

##### `resetMaintainerId` <a name="resetMaintainerId" id="@cdktf/provider-launchdarkly.metric.Metric.resetMaintainerId"></a>

```java
public void resetMaintainerId()
```

##### `resetRandomizationUnits` <a name="resetRandomizationUnits" id="@cdktf/provider-launchdarkly.metric.Metric.resetRandomizationUnits"></a>

```java
public void resetRandomizationUnits()
```

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-launchdarkly.metric.Metric.resetSelector"></a>

```java
public void resetSelector()
```

##### `resetSuccessCriteria` <a name="resetSuccessCriteria" id="@cdktf/provider-launchdarkly.metric.Metric.resetSuccessCriteria"></a>

```java
public void resetSuccessCriteria()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-launchdarkly.metric.Metric.resetTags"></a>

```java
public void resetTags()
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-launchdarkly.metric.Metric.resetUnit"></a>

```java
public void resetUnit()
```

##### `resetUrls` <a name="resetUrls" id="@cdktf/provider-launchdarkly.metric.Metric.resetUrls"></a>

```java
public void resetUrls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Metric resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.metric.Metric.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.metric.Metric;

Metric.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.metric.Metric;

Metric.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.metric.Metric;

Metric.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.metric.Metric.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.metric.Metric;

Metric.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Metric.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Metric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Metric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Metric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.metric.Metric.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Metric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.urls">urls</a></code> | <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList">MetricUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.eventKeyInput">eventKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isActiveInput">isActiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isNumericInput">isNumericInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.maintainerIdInput">maintainerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.projectKeyInput">projectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnitsInput">randomizationUnitsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.selectorInput">selectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.successCriteriaInput">successCriteriaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.urlsInput">urlsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.eventKey">eventKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isActive">isActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.isNumeric">isNumeric</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.maintainerId">maintainerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnits">randomizationUnits</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.selector">selector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.successCriteria">successCriteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.metric.Metric.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.metric.Metric.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.metric.Metric.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.metric.Metric.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.metric.Metric.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.metric.Metric.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.metric.Metric.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.metric.Metric.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.metric.Metric.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.metric.Metric.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.metric.Metric.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.metric.Metric.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.metric.Metric.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.metric.Metric.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-launchdarkly.metric.Metric.property.urls"></a>

```java
public MetricUrlsList getUrls();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList">MetricUrlsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `eventKeyInput`<sup>Optional</sup> <a name="eventKeyInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.eventKeyInput"></a>

```java
public java.lang.String getEventKeyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.isActiveInput"></a>

```java
public java.lang.Object getIsActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isNumericInput`<sup>Optional</sup> <a name="isNumericInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.isNumericInput"></a>

```java
public java.lang.Object getIsNumericInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `maintainerIdInput`<sup>Optional</sup> <a name="maintainerIdInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.maintainerIdInput"></a>

```java
public java.lang.String getMaintainerIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.projectKeyInput"></a>

```java
public java.lang.String getProjectKeyInput();
```

- *Type:* java.lang.String

---

##### `randomizationUnitsInput`<sup>Optional</sup> <a name="randomizationUnitsInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnitsInput"></a>

```java
public java.util.List<java.lang.String> getRandomizationUnitsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.selectorInput"></a>

```java
public java.lang.String getSelectorInput();
```

- *Type:* java.lang.String

---

##### `successCriteriaInput`<sup>Optional</sup> <a name="successCriteriaInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.successCriteriaInput"></a>

```java
public java.lang.String getSuccessCriteriaInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `urlsInput`<sup>Optional</sup> <a name="urlsInput" id="@cdktf/provider-launchdarkly.metric.Metric.property.urlsInput"></a>

```java
public java.lang.Object getUrlsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.metric.Metric.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `eventKey`<sup>Required</sup> <a name="eventKey" id="@cdktf/provider-launchdarkly.metric.Metric.property.eventKey"></a>

```java
public java.lang.String getEventKey();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.Metric.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktf/provider-launchdarkly.metric.Metric.property.isActive"></a>

```java
public java.lang.Object getIsActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isNumeric`<sup>Required</sup> <a name="isNumeric" id="@cdktf/provider-launchdarkly.metric.Metric.property.isNumeric"></a>

```java
public java.lang.Object getIsNumeric();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.metric.Metric.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-launchdarkly.metric.Metric.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `maintainerId`<sup>Required</sup> <a name="maintainerId" id="@cdktf/provider-launchdarkly.metric.Metric.property.maintainerId"></a>

```java
public java.lang.String getMaintainerId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.metric.Metric.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.metric.Metric.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

---

##### `randomizationUnits`<sup>Required</sup> <a name="randomizationUnits" id="@cdktf/provider-launchdarkly.metric.Metric.property.randomizationUnits"></a>

```java
public java.util.List<java.lang.String> getRandomizationUnits();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-launchdarkly.metric.Metric.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

---

##### `successCriteria`<sup>Required</sup> <a name="successCriteria" id="@cdktf/provider-launchdarkly.metric.Metric.property.successCriteria"></a>

```java
public java.lang.String getSuccessCriteria();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.metric.Metric.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-launchdarkly.metric.Metric.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.Metric.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.metric.Metric.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MetricConfig <a name="MetricConfig" id="@cdktf/provider-launchdarkly.metric.MetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.metric.MetricConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.metric.MetricConfig;

MetricConfig.builder()
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
    .key(java.lang.String)
    .kind(java.lang.String)
    .name(java.lang.String)
    .projectKey(java.lang.String)
//  .description(java.lang.String)
//  .eventKey(java.lang.String)
//  .id(java.lang.String)
//  .isActive(java.lang.Boolean)
//  .isActive(IResolvable)
//  .isNumeric(java.lang.Boolean)
//  .isNumeric(IResolvable)
//  .maintainerId(java.lang.String)
//  .randomizationUnits(java.util.List<java.lang.String>)
//  .selector(java.lang.String)
//  .successCriteria(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .unit(java.lang.String)
//  .urls(IResolvable)
//  .urls(java.util.List<MetricUrls>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.key">key</a></code> | <code>java.lang.String</code> | A unique key that will be used to reference the metric in your code. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | The metric type -available choices are 'pageview', 'click', and 'custom'. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.name">name</a></code> | <code>java.lang.String</code> | A human-readable name for your metric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.description">description</a></code> | <code>java.lang.String</code> | A short description of what the metric will be used for. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.eventKey">eventKey</a></code> | <code>java.lang.String</code> | The event key for your metric (if custom metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#id Metric#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.isActive">isActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the metric is active. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.isNumeric">isNumeric</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the metric is numeric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.maintainerId">maintainerId</a></code> | <code>java.lang.String</code> | The LaunchDarkly ID of the user who will maintain the metric. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.randomizationUnits">randomizationUnits</a></code> | <code>java.util.List<java.lang.String></code> | A set of one or more context kinds that this metric can measure events from. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.selector">selector</a></code> | <code>java.lang.String</code> | The CSS selector for your metric (if click metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.successCriteria">successCriteria</a></code> | <code>java.lang.String</code> | The success criteria for your metric (if numeric metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.unit">unit</a></code> | <code>java.lang.String</code> | The unit for your metric (if numeric metric). |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricConfig.property.urls">urls</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>></code> | urls block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A unique key that will be used to reference the metric in your code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#key Metric#key}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

The metric type -available choices are 'pageview', 'click', and 'custom'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#kind Metric#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A human-readable name for your metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#name Metric#name}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#project_key Metric#project_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A short description of what the metric will be used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#description Metric#description}

---

##### `eventKey`<sup>Optional</sup> <a name="eventKey" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.eventKey"></a>

```java
public java.lang.String getEventKey();
```

- *Type:* java.lang.String

The event key for your metric (if custom metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#event_key Metric#event_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#id Metric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.isActive"></a>

```java
public java.lang.Object getIsActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the metric is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#is_active Metric#is_active}

---

##### `isNumeric`<sup>Optional</sup> <a name="isNumeric" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.isNumeric"></a>

```java
public java.lang.Object getIsNumeric();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the metric is numeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#is_numeric Metric#is_numeric}

---

##### `maintainerId`<sup>Optional</sup> <a name="maintainerId" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.maintainerId"></a>

```java
public java.lang.String getMaintainerId();
```

- *Type:* java.lang.String

The LaunchDarkly ID of the user who will maintain the metric.

If not set, the API will automatically apply the member associated with your Terraform API key or the most recently-set maintainer

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#maintainer_id Metric#maintainer_id}

---

##### `randomizationUnits`<sup>Optional</sup> <a name="randomizationUnits" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.randomizationUnits"></a>

```java
public java.util.List<java.lang.String> getRandomizationUnits();
```

- *Type:* java.util.List<java.lang.String>

A set of one or more context kinds that this metric can measure events from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#randomization_units Metric#randomization_units}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

The CSS selector for your metric (if click metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#selector Metric#selector}

---

##### `successCriteria`<sup>Optional</sup> <a name="successCriteria" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.successCriteria"></a>

```java
public java.lang.String getSuccessCriteria();
```

- *Type:* java.lang.String

The success criteria for your metric (if numeric metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#success_criteria Metric#success_criteria}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#tags Metric#tags}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The unit for your metric (if numeric metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#unit Metric#unit}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-launchdarkly.metric.MetricConfig.property.urls"></a>

```java
public java.lang.Object getUrls();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>>

urls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#urls Metric#urls}

---

### MetricUrls <a name="MetricUrls" id="@cdktf/provider-launchdarkly.metric.MetricUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.metric.MetricUrls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.metric.MetricUrls;

MetricUrls.builder()
    .kind(java.lang.String)
//  .pattern(java.lang.String)
//  .substring(java.lang.String)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.kind">kind</a></code> | <code>java.lang.String</code> | The url type - available choices are 'exact', 'canonical', 'substring' and 'regex'. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.pattern">pattern</a></code> | <code>java.lang.String</code> | The URL-matching regex. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.substring">substring</a></code> | <code>java.lang.String</code> | The URL substring. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrls.property.url">url</a></code> | <code>java.lang.String</code> | The exact or canonical URL. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

The url type - available choices are 'exact', 'canonical', 'substring' and 'regex'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#kind Metric#kind}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

The URL-matching regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#pattern Metric#pattern}

---

##### `substring`<sup>Optional</sup> <a name="substring" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.substring"></a>

```java
public java.lang.String getSubstring();
```

- *Type:* java.lang.String

The URL substring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#substring Metric#substring}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-launchdarkly.metric.MetricUrls.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The exact or canonical URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/resources/metric#url Metric#url}

---

## Classes <a name="Classes" id="Classes"></a>

### MetricUrlsList <a name="MetricUrlsList" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.metric.MetricUrlsList;

new MetricUrlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.get"></a>

```java
public MetricUrlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.metric.MetricUrlsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>>

---


### MetricUrlsOutputReference <a name="MetricUrlsOutputReference" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.metric.MetricUrlsOutputReference;

new MetricUrlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetSubstring">resetSubstring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetPattern"></a>

```java
public void resetPattern()
```

##### `resetSubstring` <a name="resetSubstring" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetSubstring"></a>

```java
public void resetSubstring()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substringInput">substringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substring">substring</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `substringInput`<sup>Optional</sup> <a name="substringInput" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substringInput"></a>

```java
public java.lang.String getSubstringInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `substring`<sup>Required</sup> <a name="substring" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.substring"></a>

```java
public java.lang.String getSubstring();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.metric.MetricUrlsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.metric.MetricUrls">MetricUrls</a>

---



