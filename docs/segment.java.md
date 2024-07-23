# `segment` Submodule <a name="`segment` Submodule" id="@cdktf/provider-launchdarkly.segment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Segment <a name="Segment" id="@cdktf/provider-launchdarkly.segment.Segment"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment launchdarkly_segment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.Segment;

Segment.Builder.create(Construct scope, java.lang.String id)
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
    .key(java.lang.String)
    .name(java.lang.String)
    .projectKey(java.lang.String)
//  .description(java.lang.String)
//  .excluded(java.util.List<java.lang.String>)
//  .excludedContexts(IResolvable)
//  .excludedContexts(java.util.List<SegmentExcludedContexts>)
//  .id(java.lang.String)
//  .included(java.util.List<java.lang.String>)
//  .includedContexts(IResolvable)
//  .includedContexts(java.util.List<SegmentIncludedContexts>)
//  .rules(IResolvable)
//  .rules(java.util.List<SegmentRules>)
//  .tags(java.util.List<java.lang.String>)
//  .unbounded(java.lang.Boolean)
//  .unbounded(IResolvable)
//  .unboundedContextKind(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.envKey">envKey</a></code> | <code>java.lang.String</code> | The segment's environment key. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | The unique key that references the segment. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The human-friendly name for the segment. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.projectKey">projectKey</a></code> | <code>java.lang.String</code> | The segment's project key. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the segment's purpose. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.excluded">excluded</a></code> | <code>java.util.List<java.lang.String></code> | List of user keys excluded from the segment. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.excludedContexts">excludedContexts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts">SegmentExcludedContexts</a>></code> | excluded_contexts block. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#id Segment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.included">included</a></code> | <code>java.util.List<java.lang.String></code> | List of user keys included in the segment. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.includedContexts">includedContexts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts">SegmentIncludedContexts</a>></code> | included_contexts block. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRules">SegmentRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.unbounded">unbounded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to create a standard segment (`false`) or a Big Segment (`true`). |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.unboundedContextKind">unboundedContextKind</a></code> | <code>java.lang.String</code> | For Big Segments, the targeted context kind. If this attribute is not specified it will default to `user`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `envKey`<sup>Required</sup> <a name="envKey" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.envKey"></a>

- *Type:* java.lang.String

The segment's environment key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#env_key Segment#env_key}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.key"></a>

- *Type:* java.lang.String

The unique key that references the segment.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#key Segment#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The human-friendly name for the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#name Segment#name}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.projectKey"></a>

- *Type:* java.lang.String

The segment's project key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#project_key Segment#project_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the segment's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#description Segment#description}

---

##### `excluded`<sup>Optional</sup> <a name="excluded" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.excluded"></a>

- *Type:* java.util.List<java.lang.String>

List of user keys excluded from the segment.

To target on other context kinds, use the excluded_contexts block attribute. This attribute is not valid when `unbounded` is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#excluded Segment#excluded}

---

##### `excludedContexts`<sup>Optional</sup> <a name="excludedContexts" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.excludedContexts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts">SegmentExcludedContexts</a>>

excluded_contexts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#excluded_contexts Segment#excluded_contexts}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#id Segment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `included`<sup>Optional</sup> <a name="included" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.included"></a>

- *Type:* java.util.List<java.lang.String>

List of user keys included in the segment.

To target on other context kinds, use the included_contexts block attribute. This attribute is not valid when `unbounded` is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#included Segment#included}

---

##### `includedContexts`<sup>Optional</sup> <a name="includedContexts" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.includedContexts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts">SegmentIncludedContexts</a>>

included_contexts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#included_contexts Segment#included_contexts}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRules">SegmentRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#rules Segment#rules}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#tags Segment#tags}

---

##### `unbounded`<sup>Optional</sup> <a name="unbounded" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.unbounded"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to create a standard segment (`false`) or a Big Segment (`true`).

Standard segments include rule-based and smaller list-based segments. Big Segments include larger list-based segments and synced segments. Only use a Big Segment if you need to add more than 15,000 individual targets. It is not possible to manage the list of targeted contexts for Big Segments with Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#unbounded Segment#unbounded}

---

##### `unboundedContextKind`<sup>Optional</sup> <a name="unboundedContextKind" id="@cdktf/provider-launchdarkly.segment.Segment.Initializer.parameter.unboundedContextKind"></a>

- *Type:* java.lang.String

For Big Segments, the targeted context kind. If this attribute is not specified it will default to `user`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#unbounded_context_kind Segment#unbounded_context_kind}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.putExcludedContexts">putExcludedContexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.putIncludedContexts">putIncludedContexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.resetExcluded">resetExcluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.resetExcludedContexts">resetExcludedContexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.resetIncluded">resetIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.resetIncludedContexts">resetIncludedContexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.resetUnbounded">resetUnbounded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.resetUnboundedContextKind">resetUnboundedContextKind</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.segment.Segment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.segment.Segment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.segment.Segment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.segment.Segment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.segment.Segment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.segment.Segment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.segment.Segment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-launchdarkly.segment.Segment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.segment.Segment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.segment.Segment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-launchdarkly.segment.Segment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.segment.Segment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-launchdarkly.segment.Segment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-launchdarkly.segment.Segment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.segment.Segment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.segment.Segment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.Segment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-launchdarkly.segment.Segment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.segment.Segment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-launchdarkly.segment.Segment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.segment.Segment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.segment.Segment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-launchdarkly.segment.Segment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.segment.Segment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExcludedContexts` <a name="putExcludedContexts" id="@cdktf/provider-launchdarkly.segment.Segment.putExcludedContexts"></a>

```java
public void putExcludedContexts(IResolvable OR java.util.List<SegmentExcludedContexts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.segment.Segment.putExcludedContexts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts">SegmentExcludedContexts</a>>

---

##### `putIncludedContexts` <a name="putIncludedContexts" id="@cdktf/provider-launchdarkly.segment.Segment.putIncludedContexts"></a>

```java
public void putIncludedContexts(IResolvable OR java.util.List<SegmentIncludedContexts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.segment.Segment.putIncludedContexts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts">SegmentIncludedContexts</a>>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-launchdarkly.segment.Segment.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<SegmentRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.segment.Segment.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRules">SegmentRules</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-launchdarkly.segment.Segment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExcluded` <a name="resetExcluded" id="@cdktf/provider-launchdarkly.segment.Segment.resetExcluded"></a>

```java
public void resetExcluded()
```

##### `resetExcludedContexts` <a name="resetExcludedContexts" id="@cdktf/provider-launchdarkly.segment.Segment.resetExcludedContexts"></a>

```java
public void resetExcludedContexts()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.segment.Segment.resetId"></a>

```java
public void resetId()
```

##### `resetIncluded` <a name="resetIncluded" id="@cdktf/provider-launchdarkly.segment.Segment.resetIncluded"></a>

```java
public void resetIncluded()
```

##### `resetIncludedContexts` <a name="resetIncludedContexts" id="@cdktf/provider-launchdarkly.segment.Segment.resetIncludedContexts"></a>

```java
public void resetIncludedContexts()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-launchdarkly.segment.Segment.resetRules"></a>

```java
public void resetRules()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-launchdarkly.segment.Segment.resetTags"></a>

```java
public void resetTags()
```

##### `resetUnbounded` <a name="resetUnbounded" id="@cdktf/provider-launchdarkly.segment.Segment.resetUnbounded"></a>

```java
public void resetUnbounded()
```

##### `resetUnboundedContextKind` <a name="resetUnboundedContextKind" id="@cdktf/provider-launchdarkly.segment.Segment.resetUnboundedContextKind"></a>

```java
public void resetUnboundedContextKind()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Segment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.segment.Segment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.Segment;

Segment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.segment.Segment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.segment.Segment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.Segment;

Segment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.segment.Segment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-launchdarkly.segment.Segment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.Segment;

Segment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.segment.Segment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.segment.Segment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.Segment;

Segment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Segment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Segment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.segment.Segment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.segment.Segment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Segment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.segment.Segment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Segment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.segment.Segment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Segment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.creationDate">creationDate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.excludedContexts">excludedContexts</a></code> | <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList">SegmentExcludedContextsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.includedContexts">includedContexts</a></code> | <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList">SegmentIncludedContextsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesList">SegmentRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.envKeyInput">envKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.excludedContextsInput">excludedContextsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts">SegmentExcludedContexts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.excludedInput">excludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.includedContextsInput">includedContextsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts">SegmentIncludedContexts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.includedInput">includedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.projectKeyInput">projectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRules">SegmentRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.unboundedContextKindInput">unboundedContextKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.unboundedInput">unboundedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.envKey">envKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.excluded">excluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.included">included</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.unbounded">unbounded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.unboundedContextKind">unboundedContextKind</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.segment.Segment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.segment.Segment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.segment.Segment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.segment.Segment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.segment.Segment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.segment.Segment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.segment.Segment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.segment.Segment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.segment.Segment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.segment.Segment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.segment.Segment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.segment.Segment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.segment.Segment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.segment.Segment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-launchdarkly.segment.Segment.property.creationDate"></a>

```java
public java.lang.Number getCreationDate();
```

- *Type:* java.lang.Number

---

##### `excludedContexts`<sup>Required</sup> <a name="excludedContexts" id="@cdktf/provider-launchdarkly.segment.Segment.property.excludedContexts"></a>

```java
public SegmentExcludedContextsList getExcludedContexts();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList">SegmentExcludedContextsList</a>

---

##### `includedContexts`<sup>Required</sup> <a name="includedContexts" id="@cdktf/provider-launchdarkly.segment.Segment.property.includedContexts"></a>

```java
public SegmentIncludedContextsList getIncludedContexts();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList">SegmentIncludedContextsList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-launchdarkly.segment.Segment.property.rules"></a>

```java
public SegmentRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesList">SegmentRulesList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-launchdarkly.segment.Segment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `envKeyInput`<sup>Optional</sup> <a name="envKeyInput" id="@cdktf/provider-launchdarkly.segment.Segment.property.envKeyInput"></a>

```java
public java.lang.String getEnvKeyInput();
```

- *Type:* java.lang.String

---

##### `excludedContextsInput`<sup>Optional</sup> <a name="excludedContextsInput" id="@cdktf/provider-launchdarkly.segment.Segment.property.excludedContextsInput"></a>

```java
public java.lang.Object getExcludedContextsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts">SegmentExcludedContexts</a>>

---

##### `excludedInput`<sup>Optional</sup> <a name="excludedInput" id="@cdktf/provider-launchdarkly.segment.Segment.property.excludedInput"></a>

```java
public java.util.List<java.lang.String> getExcludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.segment.Segment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includedContextsInput`<sup>Optional</sup> <a name="includedContextsInput" id="@cdktf/provider-launchdarkly.segment.Segment.property.includedContextsInput"></a>

```java
public java.lang.Object getIncludedContextsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts">SegmentIncludedContexts</a>>

---

##### `includedInput`<sup>Optional</sup> <a name="includedInput" id="@cdktf/provider-launchdarkly.segment.Segment.property.includedInput"></a>

```java
public java.util.List<java.lang.String> getIncludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.segment.Segment.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.segment.Segment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktf/provider-launchdarkly.segment.Segment.property.projectKeyInput"></a>

```java
public java.lang.String getProjectKeyInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-launchdarkly.segment.Segment.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRules">SegmentRules</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-launchdarkly.segment.Segment.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `unboundedContextKindInput`<sup>Optional</sup> <a name="unboundedContextKindInput" id="@cdktf/provider-launchdarkly.segment.Segment.property.unboundedContextKindInput"></a>

```java
public java.lang.String getUnboundedContextKindInput();
```

- *Type:* java.lang.String

---

##### `unboundedInput`<sup>Optional</sup> <a name="unboundedInput" id="@cdktf/provider-launchdarkly.segment.Segment.property.unboundedInput"></a>

```java
public java.lang.Object getUnboundedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.segment.Segment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `envKey`<sup>Required</sup> <a name="envKey" id="@cdktf/provider-launchdarkly.segment.Segment.property.envKey"></a>

```java
public java.lang.String getEnvKey();
```

- *Type:* java.lang.String

---

##### `excluded`<sup>Required</sup> <a name="excluded" id="@cdktf/provider-launchdarkly.segment.Segment.property.excluded"></a>

```java
public java.util.List<java.lang.String> getExcluded();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.segment.Segment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `included`<sup>Required</sup> <a name="included" id="@cdktf/provider-launchdarkly.segment.Segment.property.included"></a>

```java
public java.util.List<java.lang.String> getIncluded();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.segment.Segment.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.segment.Segment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.segment.Segment.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.segment.Segment.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `unbounded`<sup>Required</sup> <a name="unbounded" id="@cdktf/provider-launchdarkly.segment.Segment.property.unbounded"></a>

```java
public java.lang.Object getUnbounded();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `unboundedContextKind`<sup>Required</sup> <a name="unboundedContextKind" id="@cdktf/provider-launchdarkly.segment.Segment.property.unboundedContextKind"></a>

```java
public java.lang.String getUnboundedContextKind();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.Segment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.segment.Segment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SegmentConfig <a name="SegmentConfig" id="@cdktf/provider-launchdarkly.segment.SegmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.SegmentConfig;

SegmentConfig.builder()
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
    .key(java.lang.String)
    .name(java.lang.String)
    .projectKey(java.lang.String)
//  .description(java.lang.String)
//  .excluded(java.util.List<java.lang.String>)
//  .excludedContexts(IResolvable)
//  .excludedContexts(java.util.List<SegmentExcludedContexts>)
//  .id(java.lang.String)
//  .included(java.util.List<java.lang.String>)
//  .includedContexts(IResolvable)
//  .includedContexts(java.util.List<SegmentIncludedContexts>)
//  .rules(IResolvable)
//  .rules(java.util.List<SegmentRules>)
//  .tags(java.util.List<java.lang.String>)
//  .unbounded(java.lang.Boolean)
//  .unbounded(IResolvable)
//  .unboundedContextKind(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.envKey">envKey</a></code> | <code>java.lang.String</code> | The segment's environment key. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.key">key</a></code> | <code>java.lang.String</code> | The unique key that references the segment. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | The human-friendly name for the segment. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.projectKey">projectKey</a></code> | <code>java.lang.String</code> | The segment's project key. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the segment's purpose. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.excluded">excluded</a></code> | <code>java.util.List<java.lang.String></code> | List of user keys excluded from the segment. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.excludedContexts">excludedContexts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts">SegmentExcludedContexts</a>></code> | excluded_contexts block. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#id Segment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.included">included</a></code> | <code>java.util.List<java.lang.String></code> | List of user keys included in the segment. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.includedContexts">includedContexts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts">SegmentIncludedContexts</a>></code> | included_contexts block. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRules">SegmentRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.unbounded">unbounded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to create a standard segment (`false`) or a Big Segment (`true`). |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentConfig.property.unboundedContextKind">unboundedContextKind</a></code> | <code>java.lang.String</code> | For Big Segments, the targeted context kind. If this attribute is not specified it will default to `user`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `envKey`<sup>Required</sup> <a name="envKey" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.envKey"></a>

```java
public java.lang.String getEnvKey();
```

- *Type:* java.lang.String

The segment's environment key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#env_key Segment#env_key}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The unique key that references the segment.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#key Segment#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The human-friendly name for the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#name Segment#name}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.projectKey"></a>

```java
public java.lang.String getProjectKey();
```

- *Type:* java.lang.String

The segment's project key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#project_key Segment#project_key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the segment's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#description Segment#description}

---

##### `excluded`<sup>Optional</sup> <a name="excluded" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.excluded"></a>

```java
public java.util.List<java.lang.String> getExcluded();
```

- *Type:* java.util.List<java.lang.String>

List of user keys excluded from the segment.

To target on other context kinds, use the excluded_contexts block attribute. This attribute is not valid when `unbounded` is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#excluded Segment#excluded}

---

##### `excludedContexts`<sup>Optional</sup> <a name="excludedContexts" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.excludedContexts"></a>

```java
public java.lang.Object getExcludedContexts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts">SegmentExcludedContexts</a>>

excluded_contexts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#excluded_contexts Segment#excluded_contexts}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#id Segment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `included`<sup>Optional</sup> <a name="included" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.included"></a>

```java
public java.util.List<java.lang.String> getIncluded();
```

- *Type:* java.util.List<java.lang.String>

List of user keys included in the segment.

To target on other context kinds, use the included_contexts block attribute. This attribute is not valid when `unbounded` is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#included Segment#included}

---

##### `includedContexts`<sup>Optional</sup> <a name="includedContexts" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.includedContexts"></a>

```java
public java.lang.Object getIncludedContexts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts">SegmentIncludedContexts</a>>

included_contexts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#included_contexts Segment#included_contexts}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRules">SegmentRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#rules Segment#rules}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#tags Segment#tags}

---

##### `unbounded`<sup>Optional</sup> <a name="unbounded" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.unbounded"></a>

```java
public java.lang.Object getUnbounded();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to create a standard segment (`false`) or a Big Segment (`true`).

Standard segments include rule-based and smaller list-based segments. Big Segments include larger list-based segments and synced segments. Only use a Big Segment if you need to add more than 15,000 individual targets. It is not possible to manage the list of targeted contexts for Big Segments with Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#unbounded Segment#unbounded}

---

##### `unboundedContextKind`<sup>Optional</sup> <a name="unboundedContextKind" id="@cdktf/provider-launchdarkly.segment.SegmentConfig.property.unboundedContextKind"></a>

```java
public java.lang.String getUnboundedContextKind();
```

- *Type:* java.lang.String

For Big Segments, the targeted context kind. If this attribute is not specified it will default to `user`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#unbounded_context_kind Segment#unbounded_context_kind}

---

### SegmentExcludedContexts <a name="SegmentExcludedContexts" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.SegmentExcludedContexts;

SegmentExcludedContexts.builder()
    .contextKind(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts.property.contextKind">contextKind</a></code> | <code>java.lang.String</code> | The context kind associated with this segment target. To target on user contexts, use the included and excluded attributes. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | List of target object keys included in or excluded from the segment. |

---

##### `contextKind`<sup>Required</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts.property.contextKind"></a>

```java
public java.lang.String getContextKind();
```

- *Type:* java.lang.String

The context kind associated with this segment target. To target on user contexts, use the included and excluded attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#context_kind Segment#context_kind}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

List of target object keys included in or excluded from the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#values Segment#values}

---

### SegmentIncludedContexts <a name="SegmentIncludedContexts" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.SegmentIncludedContexts;

SegmentIncludedContexts.builder()
    .contextKind(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts.property.contextKind">contextKind</a></code> | <code>java.lang.String</code> | The context kind associated with this segment target. To target on user contexts, use the included and excluded attributes. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | List of target object keys included in or excluded from the segment. |

---

##### `contextKind`<sup>Required</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts.property.contextKind"></a>

```java
public java.lang.String getContextKind();
```

- *Type:* java.lang.String

The context kind associated with this segment target. To target on user contexts, use the included and excluded attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#context_kind Segment#context_kind}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

List of target object keys included in or excluded from the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#values Segment#values}

---

### SegmentRules <a name="SegmentRules" id="@cdktf/provider-launchdarkly.segment.SegmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.segment.SegmentRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.SegmentRules;

SegmentRules.builder()
//  .bucketBy(java.lang.String)
//  .clauses(IResolvable)
//  .clauses(java.util.List<SegmentRulesClauses>)
//  .rolloutContextKind(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRules.property.bucketBy">bucketBy</a></code> | <code>java.lang.String</code> | The attribute by which to group contexts together. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRules.property.clauses">clauses</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses">SegmentRulesClauses</a>></code> | clauses block. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRules.property.rolloutContextKind">rolloutContextKind</a></code> | <code>java.lang.String</code> | The context kind associated with this segment rule. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRules.property.weight">weight</a></code> | <code>java.lang.Number</code> | The integer weight of the rule (between 1 and 100000). |

---

##### `bucketBy`<sup>Optional</sup> <a name="bucketBy" id="@cdktf/provider-launchdarkly.segment.SegmentRules.property.bucketBy"></a>

```java
public java.lang.String getBucketBy();
```

- *Type:* java.lang.String

The attribute by which to group contexts together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#bucket_by Segment#bucket_by}

---

##### `clauses`<sup>Optional</sup> <a name="clauses" id="@cdktf/provider-launchdarkly.segment.SegmentRules.property.clauses"></a>

```java
public java.lang.Object getClauses();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses">SegmentRulesClauses</a>>

clauses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#clauses Segment#clauses}

---

##### `rolloutContextKind`<sup>Optional</sup> <a name="rolloutContextKind" id="@cdktf/provider-launchdarkly.segment.SegmentRules.property.rolloutContextKind"></a>

```java
public java.lang.String getRolloutContextKind();
```

- *Type:* java.lang.String

The context kind associated with this segment rule.

This argument is only valid if `weight` is also specified. If omitted, defaults to `user`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#rollout_context_kind Segment#rollout_context_kind}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-launchdarkly.segment.SegmentRules.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

The integer weight of the rule (between 1 and 100000).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#weight Segment#weight}

---

### SegmentRulesClauses <a name="SegmentRulesClauses" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClauses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClauses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.SegmentRulesClauses;

SegmentRulesClauses.builder()
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
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses.property.attribute">attribute</a></code> | <code>java.lang.String</code> | The user attribute to operate on. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses.property.op">op</a></code> | <code>java.lang.String</code> | The operator associated with the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The list of values associated with the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses.property.contextKind">contextKind</a></code> | <code>java.lang.String</code> | The context kind associated with this rule clause. If omitted, defaults to `user`. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses.property.negate">negate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to negate the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses.property.valueType">valueType</a></code> | <code>java.lang.String</code> | The type for each of the clause's values. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClauses.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

The user attribute to operate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#attribute Segment#attribute}

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClauses.property.op"></a>

```java
public java.lang.String getOp();
```

- *Type:* java.lang.String

The operator associated with the rule clause.

Available options are `in`, `endsWith`, `startsWith`, `matches`, `contains`, `lessThan`, `lessThanOrEqual`, `greaterThanOrEqual`, `before`, `after`, `segmentMatch`, `semVerEqual`, `semVerLessThan`, and `semVerGreaterThan`. Read LaunchDarkly's [Operators](https://docs.launchdarkly.com/sdk/concepts/flag-evaluation-rules#operators) documentation for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#op Segment#op}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClauses.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The list of values associated with the rule clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#values Segment#values}

---

##### `contextKind`<sup>Optional</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClauses.property.contextKind"></a>

```java
public java.lang.String getContextKind();
```

- *Type:* java.lang.String

The context kind associated with this rule clause. If omitted, defaults to `user`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#context_kind Segment#context_kind}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClauses.property.negate"></a>

```java
public java.lang.Object getNegate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to negate the rule clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#negate Segment#negate}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClauses.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

The type for each of the clause's values.

Available types are `boolean`, `string`, and `number`. If omitted, `value_type` defaults to `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.20.0/docs/resources/segment#value_type Segment#value_type}

---

## Classes <a name="Classes" id="Classes"></a>

### SegmentExcludedContextsList <a name="SegmentExcludedContextsList" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.SegmentExcludedContextsList;

new SegmentExcludedContextsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.get"></a>

```java
public SegmentExcludedContextsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts">SegmentExcludedContexts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts">SegmentExcludedContexts</a>>

---


### SegmentExcludedContextsOutputReference <a name="SegmentExcludedContextsOutputReference" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.SegmentExcludedContextsOutputReference;

new SegmentExcludedContextsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.property.contextKindInput">contextKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.property.contextKind">contextKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts">SegmentExcludedContexts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contextKindInput`<sup>Optional</sup> <a name="contextKindInput" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.property.contextKindInput"></a>

```java
public java.lang.String getContextKindInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contextKind`<sup>Required</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.property.contextKind"></a>

```java
public java.lang.String getContextKind();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.segment.SegmentExcludedContextsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.segment.SegmentExcludedContexts">SegmentExcludedContexts</a>

---


### SegmentIncludedContextsList <a name="SegmentIncludedContextsList" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.SegmentIncludedContextsList;

new SegmentIncludedContextsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.get"></a>

```java
public SegmentIncludedContextsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts">SegmentIncludedContexts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts">SegmentIncludedContexts</a>>

---


### SegmentIncludedContextsOutputReference <a name="SegmentIncludedContextsOutputReference" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.SegmentIncludedContextsOutputReference;

new SegmentIncludedContextsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.property.contextKindInput">contextKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.property.contextKind">contextKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts">SegmentIncludedContexts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contextKindInput`<sup>Optional</sup> <a name="contextKindInput" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.property.contextKindInput"></a>

```java
public java.lang.String getContextKindInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contextKind`<sup>Required</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.property.contextKind"></a>

```java
public java.lang.String getContextKind();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.segment.SegmentIncludedContextsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.segment.SegmentIncludedContexts">SegmentIncludedContexts</a>

---


### SegmentRulesClausesList <a name="SegmentRulesClausesList" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.SegmentRulesClausesList;

new SegmentRulesClausesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.get"></a>

```java
public SegmentRulesClausesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses">SegmentRulesClauses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses">SegmentRulesClauses</a>>

---


### SegmentRulesClausesOutputReference <a name="SegmentRulesClausesOutputReference" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.SegmentRulesClausesOutputReference;

new SegmentRulesClausesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.resetContextKind">resetContextKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContextKind` <a name="resetContextKind" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.resetContextKind"></a>

```java
public void resetContextKind()
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.resetNegate"></a>

```java
public void resetNegate()
```

##### `resetValueType` <a name="resetValueType" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.resetValueType"></a>

```java
public void resetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.contextKindInput">contextKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.opInput">opInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.contextKind">contextKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.negate">negate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.op">op</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses">SegmentRulesClauses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `contextKindInput`<sup>Optional</sup> <a name="contextKindInput" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.contextKindInput"></a>

```java
public java.lang.String getContextKindInput();
```

- *Type:* java.lang.String

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.negateInput"></a>

```java
public java.lang.Object getNegateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `opInput`<sup>Optional</sup> <a name="opInput" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.opInput"></a>

```java
public java.lang.String getOpInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `contextKind`<sup>Required</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.contextKind"></a>

```java
public java.lang.String getContextKind();
```

- *Type:* java.lang.String

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.negate"></a>

```java
public java.lang.Object getNegate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.op"></a>

```java
public java.lang.String getOp();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.segment.SegmentRulesClausesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses">SegmentRulesClauses</a>

---


### SegmentRulesList <a name="SegmentRulesList" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.SegmentRulesList;

new SegmentRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.get"></a>

```java
public SegmentRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRules">SegmentRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.segment.SegmentRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRules">SegmentRules</a>>

---


### SegmentRulesOutputReference <a name="SegmentRulesOutputReference" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.launchdarkly.segment.SegmentRulesOutputReference;

new SegmentRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.putClauses">putClauses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.resetBucketBy">resetBucketBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.resetClauses">resetClauses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.resetRolloutContextKind">resetRolloutContextKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClauses` <a name="putClauses" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.putClauses"></a>

```java
public void putClauses(IResolvable OR java.util.List<SegmentRulesClauses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.putClauses.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses">SegmentRulesClauses</a>>

---

##### `resetBucketBy` <a name="resetBucketBy" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.resetBucketBy"></a>

```java
public void resetBucketBy()
```

##### `resetClauses` <a name="resetClauses" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.resetClauses"></a>

```java
public void resetClauses()
```

##### `resetRolloutContextKind` <a name="resetRolloutContextKind" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.resetRolloutContextKind"></a>

```java
public void resetRolloutContextKind()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.clauses">clauses</a></code> | <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList">SegmentRulesClausesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.bucketByInput">bucketByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.clausesInput">clausesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses">SegmentRulesClauses</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.rolloutContextKindInput">rolloutContextKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.bucketBy">bucketBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.rolloutContextKind">rolloutContextKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.segment.SegmentRules">SegmentRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clauses`<sup>Required</sup> <a name="clauses" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.clauses"></a>

```java
public SegmentRulesClausesList getClauses();
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClausesList">SegmentRulesClausesList</a>

---

##### `bucketByInput`<sup>Optional</sup> <a name="bucketByInput" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.bucketByInput"></a>

```java
public java.lang.String getBucketByInput();
```

- *Type:* java.lang.String

---

##### `clausesInput`<sup>Optional</sup> <a name="clausesInput" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.clausesInput"></a>

```java
public java.lang.Object getClausesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-launchdarkly.segment.SegmentRulesClauses">SegmentRulesClauses</a>>

---

##### `rolloutContextKindInput`<sup>Optional</sup> <a name="rolloutContextKindInput" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.rolloutContextKindInput"></a>

```java
public java.lang.String getRolloutContextKindInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `bucketBy`<sup>Required</sup> <a name="bucketBy" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.bucketBy"></a>

```java
public java.lang.String getBucketBy();
```

- *Type:* java.lang.String

---

##### `rolloutContextKind`<sup>Required</sup> <a name="rolloutContextKind" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.rolloutContextKind"></a>

```java
public java.lang.String getRolloutContextKind();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.segment.SegmentRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-launchdarkly.segment.SegmentRules">SegmentRules</a>

---



