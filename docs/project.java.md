# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-launchdarkly.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-launchdarkly.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project launchdarkly_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.Project.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.Project;

Project.Builder.create(Construct scope, java.lang.String id)
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
    .environments(IResolvable)
    .environments(java.util.List<ProjectEnvironments>)
    .key(java.lang.String)
    .name(java.lang.String)
//  .defaultClientSideAvailability(IResolvable)
//  .defaultClientSideAvailability(java.util.List<ProjectDefaultClientSideAvailability>)
//  .id(java.lang.String)
//  .includeInSnippet(java.lang.Boolean)
//  .includeInSnippet(IResolvable)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.environments">environments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>></code> | environments block. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | The project's unique key. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The project's name. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.defaultClientSideAvailability">defaultClientSideAvailability</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>></code> | default_client_side_availability block. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#id Project#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.includeInSnippet">includeInSnippet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether feature flags created under the project should be available to client-side SDKs by default. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags associated with your resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.environments"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>>

environments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#environments Project#environments}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.key"></a>

- *Type:* java.lang.String

The project's unique key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#key Project#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The project's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#name Project#name}

---

##### `defaultClientSideAvailability`<sup>Optional</sup> <a name="defaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.defaultClientSideAvailability"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>>

default_client_side_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#default_client_side_availability Project#default_client_side_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#id Project#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeInSnippet`<sup>Optional</sup> <a name="includeInSnippet" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.includeInSnippet"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether feature flags created under the project should be available to client-side SDKs by default.

Please migrate to `default_client_side_availability` to maintain future compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#include_in_snippet Project#include_in_snippet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.project.Project.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#tags Project#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.putDefaultClientSideAvailability">putDefaultClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.putEnvironments">putEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetDefaultClientSideAvailability">resetDefaultClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetIncludeInSnippet">resetIncludeInSnippet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.project.Project.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.project.Project.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.project.Project.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.project.Project.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.project.Project.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.project.Project.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-launchdarkly.project.Project.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.project.Project.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.project.Project.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-launchdarkly.project.Project.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.project.Project.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.project.Project.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.project.Project.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.project.Project.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.project.Project.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.project.Project.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.project.Project.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-launchdarkly.project.Project.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-launchdarkly.project.Project.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.project.Project.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.project.Project.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.project.Project.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-launchdarkly.project.Project.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.project.Project.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-launchdarkly.project.Project.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.project.Project.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.project.Project.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-launchdarkly.project.Project.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.project.Project.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultClientSideAvailability` <a name="putDefaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.Project.putDefaultClientSideAvailability"></a>

```java
public void putDefaultClientSideAvailability(IResolvable OR java.util.List<ProjectDefaultClientSideAvailability> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.project.Project.putDefaultClientSideAvailability.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>>

---

##### `putEnvironments` <a name="putEnvironments" id="@cdktf/provider-launchdarkly.project.Project.putEnvironments"></a>

```java
public void putEnvironments(IResolvable OR java.util.List<ProjectEnvironments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.project.Project.putEnvironments.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>>

---

##### `resetDefaultClientSideAvailability` <a name="resetDefaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.Project.resetDefaultClientSideAvailability"></a>

```java
public void resetDefaultClientSideAvailability()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.project.Project.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeInSnippet` <a name="resetIncludeInSnippet" id="@cdktf/provider-launchdarkly.project.Project.resetIncludeInSnippet"></a>

```java
public void resetIncludeInSnippet()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-launchdarkly.project.Project.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.project.Project.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.Project;

Project.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.project.Project.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.project.Project.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.Project;

Project.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-launchdarkly.project.Project.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.Project;

Project.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.Project;

Project.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Project.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Project to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Project that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.project.Project.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Project to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.defaultClientSideAvailability">defaultClientSideAvailability</a></code> | <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList">ProjectDefaultClientSideAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.environments">environments</a></code> | <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList">ProjectEnvironmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.defaultClientSideAvailabilityInput">defaultClientSideAvailabilityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.environmentsInput">environmentsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.includeInSnippetInput">includeInSnippetInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.includeInSnippet">includeInSnippet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.project.Project.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.project.Project.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.project.Project.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.project.Project.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.project.Project.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.project.Project.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.project.Project.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.project.Project.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.project.Project.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.project.Project.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.project.Project.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.project.Project.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.project.Project.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.project.Project.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultClientSideAvailability`<sup>Required</sup> <a name="defaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.Project.property.defaultClientSideAvailability"></a>

```java
public ProjectDefaultClientSideAvailabilityList getDefaultClientSideAvailability();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList">ProjectDefaultClientSideAvailabilityList</a>

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktf/provider-launchdarkly.project.Project.property.environments"></a>

```java
public ProjectEnvironmentsList getEnvironments();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList">ProjectEnvironmentsList</a>

---

##### `defaultClientSideAvailabilityInput`<sup>Optional</sup> <a name="defaultClientSideAvailabilityInput" id="@cdktf/provider-launchdarkly.project.Project.property.defaultClientSideAvailabilityInput"></a>

```java
public java.lang.Object getDefaultClientSideAvailabilityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>>

---

##### `environmentsInput`<sup>Optional</sup> <a name="environmentsInput" id="@cdktf/provider-launchdarkly.project.Project.property.environmentsInput"></a>

```java
public java.lang.Object getEnvironmentsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.project.Project.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeInSnippetInput`<sup>Optional</sup> <a name="includeInSnippetInput" id="@cdktf/provider-launchdarkly.project.Project.property.includeInSnippetInput"></a>

```java
public java.lang.Object getIncludeInSnippetInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.project.Project.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.project.Project.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-launchdarkly.project.Project.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.project.Project.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeInSnippet`<sup>Required</sup> <a name="includeInSnippet" id="@cdktf/provider-launchdarkly.project.Project.property.includeInSnippet"></a>

```java
public java.lang.Object getIncludeInSnippet();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.project.Project.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.project.Project.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.project.Project.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.Project.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.project.Project.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-launchdarkly.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.project.ProjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.ProjectConfig;

ProjectConfig.builder()
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
    .environments(IResolvable)
    .environments(java.util.List<ProjectEnvironments>)
    .key(java.lang.String)
    .name(java.lang.String)
//  .defaultClientSideAvailability(IResolvable)
//  .defaultClientSideAvailability(java.util.List<ProjectDefaultClientSideAvailability>)
//  .id(java.lang.String)
//  .includeInSnippet(java.lang.Boolean)
//  .includeInSnippet(IResolvable)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.environments">environments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>></code> | environments block. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.key">key</a></code> | <code>java.lang.String</code> | The project's unique key. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.name">name</a></code> | <code>java.lang.String</code> | The project's name. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.defaultClientSideAvailability">defaultClientSideAvailability</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>></code> | default_client_side_availability block. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#id Project#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.includeInSnippet">includeInSnippet</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether feature flags created under the project should be available to client-side SDKs by default. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags associated with your resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.environments"></a>

```java
public java.lang.Object getEnvironments();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>>

environments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#environments Project#environments}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The project's unique key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#key Project#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The project's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#name Project#name}

---

##### `defaultClientSideAvailability`<sup>Optional</sup> <a name="defaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.defaultClientSideAvailability"></a>

```java
public java.lang.Object getDefaultClientSideAvailability();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>>

default_client_side_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#default_client_side_availability Project#default_client_side_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#id Project#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeInSnippet`<sup>Optional</sup> <a name="includeInSnippet" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.includeInSnippet"></a>

```java
public java.lang.Object getIncludeInSnippet();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether feature flags created under the project should be available to client-side SDKs by default.

Please migrate to `default_client_side_availability` to maintain future compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#include_in_snippet Project#include_in_snippet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.project.ProjectConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#tags Project#tags}

---

### ProjectDefaultClientSideAvailability <a name="ProjectDefaultClientSideAvailability" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.ProjectDefaultClientSideAvailability;

ProjectDefaultClientSideAvailability.builder()
    .usingEnvironmentId(java.lang.Boolean)
    .usingEnvironmentId(IResolvable)
    .usingMobileKey(java.lang.Boolean)
    .usingMobileKey(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.property.usingEnvironmentId">usingEnvironmentId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#using_environment_id Project#using_environment_id}. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.property.usingMobileKey">usingMobileKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#using_mobile_key Project#using_mobile_key}. |

---

##### `usingEnvironmentId`<sup>Required</sup> <a name="usingEnvironmentId" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.property.usingEnvironmentId"></a>

```java
public java.lang.Object getUsingEnvironmentId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#using_environment_id Project#using_environment_id}.

---

##### `usingMobileKey`<sup>Required</sup> <a name="usingMobileKey" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability.property.usingMobileKey"></a>

```java
public java.lang.Object getUsingMobileKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#using_mobile_key Project#using_mobile_key}.

---

### ProjectEnvironments <a name="ProjectEnvironments" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.ProjectEnvironments;

ProjectEnvironments.builder()
    .color(java.lang.String)
    .key(java.lang.String)
    .name(java.lang.String)
//  .approvalSettings(IResolvable)
//  .approvalSettings(java.util.List<ProjectEnvironmentsApprovalSettings>)
//  .confirmChanges(java.lang.Boolean)
//  .confirmChanges(IResolvable)
//  .critical(java.lang.Boolean)
//  .critical(IResolvable)
//  .defaultTrackEvents(java.lang.Boolean)
//  .defaultTrackEvents(IResolvable)
//  .defaultTtl(java.lang.Number)
//  .requireComments(java.lang.Boolean)
//  .requireComments(IResolvable)
//  .secureMode(java.lang.Boolean)
//  .secureMode(IResolvable)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.color">color</a></code> | <code>java.lang.String</code> | The color swatch as an RGB hex value with no leading `#`. For example: `000000`. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.key">key</a></code> | <code>java.lang.String</code> | The project-unique key for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.name">name</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.approvalSettings">approvalSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>></code> | approval_settings block. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.confirmChanges">confirmChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` if this environment requires confirmation for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the environment is critical. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.defaultTrackEvents">defaultTrackEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to enable data export for every flag created in this environment after you configure this argument. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | The TTL for the environment. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.requireComments">requireComments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` if this environment requires comments for flag and segment changes. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.secureMode">secureMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` to ensure a user of the client-side SDK cannot impersonate another user. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags associated with your resource. |

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.color"></a>

```java
public java.lang.String getColor();
```

- *Type:* java.lang.String

The color swatch as an RGB hex value with no leading `#`. For example: `000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#color Project#color}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The project-unique key for the environment.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#key Project#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#name Project#name}

---

##### `approvalSettings`<sup>Optional</sup> <a name="approvalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.approvalSettings"></a>

```java
public java.lang.Object getApprovalSettings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>>

approval_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#approval_settings Project#approval_settings}

---

##### `confirmChanges`<sup>Optional</sup> <a name="confirmChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.confirmChanges"></a>

```java
public java.lang.Object getConfirmChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` if this environment requires confirmation for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#confirm_changes Project#confirm_changes}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.critical"></a>

```java
public java.lang.Object getCritical();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the environment is critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#critical Project#critical}

---

##### `defaultTrackEvents`<sup>Optional</sup> <a name="defaultTrackEvents" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.defaultTrackEvents"></a>

```java
public java.lang.Object getDefaultTrackEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to enable data export for every flag created in this environment after you configure this argument.

This field will default to `false` when not set. To learn more, read [Data Export](https://docs.launchdarkly.com/home/data-export).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#default_track_events Project#default_track_events}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

The TTL for the environment.

This must be between 0 and 60 minutes. The TTL setting only applies to environments using the PHP SDK. This field will default to `0` when not set. To learn more, read [TTL settings](https://docs.launchdarkly.com/home/organize/environments#ttl-settings).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#default_ttl Project#default_ttl}

---

##### `requireComments`<sup>Optional</sup> <a name="requireComments" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.requireComments"></a>

```java
public java.lang.Object getRequireComments();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` if this environment requires comments for flag and segment changes.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#require_comments Project#require_comments}

---

##### `secureMode`<sup>Optional</sup> <a name="secureMode" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.secureMode"></a>

```java
public java.lang.Object getSecureMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` to ensure a user of the client-side SDK cannot impersonate another user.

This field will default to `false` when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#secure_mode Project#secure_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironments.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#tags Project#tags}

---

### ProjectEnvironmentsApprovalSettings <a name="ProjectEnvironmentsApprovalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.ProjectEnvironmentsApprovalSettings;

ProjectEnvironmentsApprovalSettings.builder()
//  .autoApplyApprovedChanges(java.lang.Boolean)
//  .autoApplyApprovedChanges(IResolvable)
//  .canApplyDeclinedChanges(java.lang.Boolean)
//  .canApplyDeclinedChanges(IResolvable)
//  .canReviewOwnRequest(java.lang.Boolean)
//  .canReviewOwnRequest(IResolvable)
//  .minNumApprovals(java.lang.Number)
//  .required(java.lang.Boolean)
//  .required(IResolvable)
//  .requiredApprovalTags(java.util.List<java.lang.String>)
//  .serviceConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .serviceKind(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.autoApplyApprovedChanges">autoApplyApprovedChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatically apply changes that have been approved by all reviewers. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.canApplyDeclinedChanges">canApplyDeclinedChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.canReviewOwnRequest">canReviewOwnRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.minNumApprovals">minNumApprovals</a></code> | <code>java.lang.Number</code> | The number of approvals required before an approval request can be applied. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to `true` for changes to flags in this environment to require approval. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.requiredApprovalTags">requiredApprovalTags</a></code> | <code>java.util.List<java.lang.String></code> | An array of tags used to specify which flags with those tags require approval. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.serviceConfig">serviceConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The configuration for the service associated with this approval. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.serviceKind">serviceKind</a></code> | <code>java.lang.String</code> | The kind of service associated with this approval. |

---

##### `autoApplyApprovedChanges`<sup>Optional</sup> <a name="autoApplyApprovedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.autoApplyApprovedChanges"></a>

```java
public java.lang.Object getAutoApplyApprovedChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatically apply changes that have been approved by all reviewers.

This field is only applicable for approval service kinds other than `launchdarkly`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#auto_apply_approved_changes Project#auto_apply_approved_changes}

---

##### `canApplyDeclinedChanges`<sup>Optional</sup> <a name="canApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.canApplyDeclinedChanges"></a>

```java
public java.lang.Object getCanApplyDeclinedChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` if changes can be applied as long as the `min_num_approvals` is met, regardless of whether any reviewers have declined a request.

Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#can_apply_declined_changes Project#can_apply_declined_changes}

---

##### `canReviewOwnRequest`<sup>Optional</sup> <a name="canReviewOwnRequest" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.canReviewOwnRequest"></a>

```java
public java.lang.Object getCanReviewOwnRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` if requesters can approve or decline their own request. They may always comment. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#can_review_own_request Project#can_review_own_request}

---

##### `minNumApprovals`<sup>Optional</sup> <a name="minNumApprovals" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.minNumApprovals"></a>

```java
public java.lang.Number getMinNumApprovals();
```

- *Type:* java.lang.Number

The number of approvals required before an approval request can be applied.

This number must be between 1 and 5. Defaults to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#min_num_approvals Project#min_num_approvals}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to `true` for changes to flags in this environment to require approval.

You may only set `required` to true if `required_approval_tags` is not set and vice versa. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#required Project#required}

---

##### `requiredApprovalTags`<sup>Optional</sup> <a name="requiredApprovalTags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.requiredApprovalTags"></a>

```java
public java.util.List<java.lang.String> getRequiredApprovalTags();
```

- *Type:* java.util.List<java.lang.String>

An array of tags used to specify which flags with those tags require approval.

You may only set `required_approval_tags` if `required` is set to `false` and vice versa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#required_approval_tags Project#required_approval_tags}

---

##### `serviceConfig`<sup>Optional</sup> <a name="serviceConfig" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.serviceConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The configuration for the service associated with this approval.

This is specific to each approval service. For a `service_kind` of `servicenow`, the following fields apply:

```
 - `template` (String) The sys_id of the Standard Change Request Template in ServiceNow that LaunchDarkly will use when creating the change request.
 - `detail_column` (String) The name of the ServiceNow Change Request column LaunchDarkly uses to populate detailed approval request information. This is most commonly "justification".
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#service_config Project#service_config}

---

##### `serviceKind`<sup>Optional</sup> <a name="serviceKind" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings.property.serviceKind"></a>

```java
public java.lang.String getServiceKind();
```

- *Type:* java.lang.String

The kind of service associated with this approval.

This determines which platform is used for requesting approval. Valid values are `servicenow`, `launchdarkly`. If you use a value other than `launchdarkly`, you must have already configured the integration in the LaunchDarkly UI or your apply will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/project#service_kind Project#service_kind}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectDefaultClientSideAvailabilityList <a name="ProjectDefaultClientSideAvailabilityList" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.ProjectDefaultClientSideAvailabilityList;

new ProjectDefaultClientSideAvailabilityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.get"></a>

```java
public ProjectDefaultClientSideAvailabilityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>>

---


### ProjectDefaultClientSideAvailabilityOutputReference <a name="ProjectDefaultClientSideAvailabilityOutputReference" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference;

new ProjectDefaultClientSideAvailabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput">usingEnvironmentIdInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingMobileKeyInput">usingMobileKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingEnvironmentId">usingEnvironmentId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingMobileKey">usingMobileKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `usingEnvironmentIdInput`<sup>Optional</sup> <a name="usingEnvironmentIdInput" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput"></a>

```java
public java.lang.Object getUsingEnvironmentIdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usingMobileKeyInput`<sup>Optional</sup> <a name="usingMobileKeyInput" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingMobileKeyInput"></a>

```java
public java.lang.Object getUsingMobileKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usingEnvironmentId`<sup>Required</sup> <a name="usingEnvironmentId" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingEnvironmentId"></a>

```java
public java.lang.Object getUsingEnvironmentId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usingMobileKey`<sup>Required</sup> <a name="usingMobileKey" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.usingMobileKey"></a>

```java
public java.lang.Object getUsingMobileKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailabilityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.project.ProjectDefaultClientSideAvailability">ProjectDefaultClientSideAvailability</a>

---


### ProjectEnvironmentsApprovalSettingsList <a name="ProjectEnvironmentsApprovalSettingsList" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.ProjectEnvironmentsApprovalSettingsList;

new ProjectEnvironmentsApprovalSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.get"></a>

```java
public ProjectEnvironmentsApprovalSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>>

---


### ProjectEnvironmentsApprovalSettingsOutputReference <a name="ProjectEnvironmentsApprovalSettingsOutputReference" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference;

new ProjectEnvironmentsApprovalSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetAutoApplyApprovedChanges">resetAutoApplyApprovedChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetCanApplyDeclinedChanges">resetCanApplyDeclinedChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetCanReviewOwnRequest">resetCanReviewOwnRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetMinNumApprovals">resetMinNumApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetRequiredApprovalTags">resetRequiredApprovalTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetServiceConfig">resetServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetServiceKind">resetServiceKind</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoApplyApprovedChanges` <a name="resetAutoApplyApprovedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetAutoApplyApprovedChanges"></a>

```java
public void resetAutoApplyApprovedChanges()
```

##### `resetCanApplyDeclinedChanges` <a name="resetCanApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetCanApplyDeclinedChanges"></a>

```java
public void resetCanApplyDeclinedChanges()
```

##### `resetCanReviewOwnRequest` <a name="resetCanReviewOwnRequest" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetCanReviewOwnRequest"></a>

```java
public void resetCanReviewOwnRequest()
```

##### `resetMinNumApprovals` <a name="resetMinNumApprovals" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetMinNumApprovals"></a>

```java
public void resetMinNumApprovals()
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetRequiredApprovalTags` <a name="resetRequiredApprovalTags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetRequiredApprovalTags"></a>

```java
public void resetRequiredApprovalTags()
```

##### `resetServiceConfig` <a name="resetServiceConfig" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetServiceConfig"></a>

```java
public void resetServiceConfig()
```

##### `resetServiceKind` <a name="resetServiceKind" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.resetServiceKind"></a>

```java
public void resetServiceKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.autoApplyApprovedChangesInput">autoApplyApprovedChangesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput">canApplyDeclinedChangesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canReviewOwnRequestInput">canReviewOwnRequestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.minNumApprovalsInput">minNumApprovalsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredApprovalTagsInput">requiredApprovalTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceConfigInput">serviceConfigInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceKindInput">serviceKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.autoApplyApprovedChanges">autoApplyApprovedChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canApplyDeclinedChanges">canApplyDeclinedChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canReviewOwnRequest">canReviewOwnRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.minNumApprovals">minNumApprovals</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredApprovalTags">requiredApprovalTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceConfig">serviceConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceKind">serviceKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoApplyApprovedChangesInput`<sup>Optional</sup> <a name="autoApplyApprovedChangesInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.autoApplyApprovedChangesInput"></a>

```java
public java.lang.Object getAutoApplyApprovedChangesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `canApplyDeclinedChangesInput`<sup>Optional</sup> <a name="canApplyDeclinedChangesInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canApplyDeclinedChangesInput"></a>

```java
public java.lang.Object getCanApplyDeclinedChangesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `canReviewOwnRequestInput`<sup>Optional</sup> <a name="canReviewOwnRequestInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canReviewOwnRequestInput"></a>

```java
public java.lang.Object getCanReviewOwnRequestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minNumApprovalsInput`<sup>Optional</sup> <a name="minNumApprovalsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.minNumApprovalsInput"></a>

```java
public java.lang.Number getMinNumApprovalsInput();
```

- *Type:* java.lang.Number

---

##### `requiredApprovalTagsInput`<sup>Optional</sup> <a name="requiredApprovalTagsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredApprovalTagsInput"></a>

```java
public java.util.List<java.lang.String> getRequiredApprovalTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredInput"></a>

```java
public java.lang.Object getRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceConfigInput`<sup>Optional</sup> <a name="serviceConfigInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceConfigInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serviceKindInput`<sup>Optional</sup> <a name="serviceKindInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceKindInput"></a>

```java
public java.lang.String getServiceKindInput();
```

- *Type:* java.lang.String

---

##### `autoApplyApprovedChanges`<sup>Required</sup> <a name="autoApplyApprovedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.autoApplyApprovedChanges"></a>

```java
public java.lang.Object getAutoApplyApprovedChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `canApplyDeclinedChanges`<sup>Required</sup> <a name="canApplyDeclinedChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canApplyDeclinedChanges"></a>

```java
public java.lang.Object getCanApplyDeclinedChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `canReviewOwnRequest`<sup>Required</sup> <a name="canReviewOwnRequest" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.canReviewOwnRequest"></a>

```java
public java.lang.Object getCanReviewOwnRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minNumApprovals`<sup>Required</sup> <a name="minNumApprovals" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.minNumApprovals"></a>

```java
public java.lang.Number getMinNumApprovals();
```

- *Type:* java.lang.Number

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requiredApprovalTags`<sup>Required</sup> <a name="requiredApprovalTags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.requiredApprovalTags"></a>

```java
public java.util.List<java.lang.String> getRequiredApprovalTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serviceKind`<sup>Required</sup> <a name="serviceKind" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.serviceKind"></a>

```java
public java.lang.String getServiceKind();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>

---


### ProjectEnvironmentsList <a name="ProjectEnvironmentsList" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.ProjectEnvironmentsList;

new ProjectEnvironmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.get"></a>

```java
public ProjectEnvironmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>>

---


### ProjectEnvironmentsOutputReference <a name="ProjectEnvironmentsOutputReference" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.project.ProjectEnvironmentsOutputReference;

new ProjectEnvironmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.putApprovalSettings">putApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetApprovalSettings">resetApprovalSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetConfirmChanges">resetConfirmChanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetCritical">resetCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetDefaultTrackEvents">resetDefaultTrackEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetRequireComments">resetRequireComments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetSecureMode">resetSecureMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApprovalSettings` <a name="putApprovalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.putApprovalSettings"></a>

```java
public void putApprovalSettings(IResolvable OR java.util.List<ProjectEnvironmentsApprovalSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.putApprovalSettings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>>

---

##### `resetApprovalSettings` <a name="resetApprovalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetApprovalSettings"></a>

```java
public void resetApprovalSettings()
```

##### `resetConfirmChanges` <a name="resetConfirmChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetConfirmChanges"></a>

```java
public void resetConfirmChanges()
```

##### `resetCritical` <a name="resetCritical" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetCritical"></a>

```java
public void resetCritical()
```

##### `resetDefaultTrackEvents` <a name="resetDefaultTrackEvents" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetDefaultTrackEvents"></a>

```java
public void resetDefaultTrackEvents()
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetDefaultTtl"></a>

```java
public void resetDefaultTtl()
```

##### `resetRequireComments` <a name="resetRequireComments" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetRequireComments"></a>

```java
public void resetRequireComments()
```

##### `resetSecureMode` <a name="resetSecureMode" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetSecureMode"></a>

```java
public void resetSecureMode()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.approvalSettings">approvalSettings</a></code> | <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList">ProjectEnvironmentsApprovalSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.clientSideId">clientSideId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.mobileKey">mobileKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.approvalSettingsInput">approvalSettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.colorInput">colorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.confirmChangesInput">confirmChangesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.criticalInput">criticalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTrackEventsInput">defaultTrackEventsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.requireCommentsInput">requireCommentsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.secureModeInput">secureModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.color">color</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.confirmChanges">confirmChanges</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTrackEvents">defaultTrackEvents</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.requireComments">requireComments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.secureMode">secureMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `approvalSettings`<sup>Required</sup> <a name="approvalSettings" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.approvalSettings"></a>

```java
public ProjectEnvironmentsApprovalSettingsList getApprovalSettings();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettingsList">ProjectEnvironmentsApprovalSettingsList</a>

---

##### `clientSideId`<sup>Required</sup> <a name="clientSideId" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.clientSideId"></a>

```java
public java.lang.String getClientSideId();
```

- *Type:* java.lang.String

---

##### `mobileKey`<sup>Required</sup> <a name="mobileKey" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.mobileKey"></a>

```java
public java.lang.String getMobileKey();
```

- *Type:* java.lang.String

---

##### `approvalSettingsInput`<sup>Optional</sup> <a name="approvalSettingsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.approvalSettingsInput"></a>

```java
public java.lang.Object getApprovalSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironmentsApprovalSettings">ProjectEnvironmentsApprovalSettings</a>>

---

##### `colorInput`<sup>Optional</sup> <a name="colorInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.colorInput"></a>

```java
public java.lang.String getColorInput();
```

- *Type:* java.lang.String

---

##### `confirmChangesInput`<sup>Optional</sup> <a name="confirmChangesInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.confirmChangesInput"></a>

```java
public java.lang.Object getConfirmChangesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.criticalInput"></a>

```java
public java.lang.Object getCriticalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTrackEventsInput`<sup>Optional</sup> <a name="defaultTrackEventsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTrackEventsInput"></a>

```java
public java.lang.Object getDefaultTrackEventsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTtlInput"></a>

```java
public java.lang.Number getDefaultTtlInput();
```

- *Type:* java.lang.Number

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requireCommentsInput`<sup>Optional</sup> <a name="requireCommentsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.requireCommentsInput"></a>

```java
public java.lang.Object getRequireCommentsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secureModeInput`<sup>Optional</sup> <a name="secureModeInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.secureModeInput"></a>

```java
public java.lang.Object getSecureModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.color"></a>

```java
public java.lang.String getColor();
```

- *Type:* java.lang.String

---

##### `confirmChanges`<sup>Required</sup> <a name="confirmChanges" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.confirmChanges"></a>

```java
public java.lang.Object getConfirmChanges();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.critical"></a>

```java
public java.lang.Object getCritical();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTrackEvents`<sup>Required</sup> <a name="defaultTrackEvents" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTrackEvents"></a>

```java
public java.lang.Object getDefaultTrackEvents();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `requireComments`<sup>Required</sup> <a name="requireComments" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.requireComments"></a>

```java
public java.lang.Object getRequireComments();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secureMode`<sup>Required</sup> <a name="secureMode" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.secureMode"></a>

```java
public java.lang.Object getSecureMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.project.ProjectEnvironmentsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.project.ProjectEnvironments">ProjectEnvironments</a>

---



