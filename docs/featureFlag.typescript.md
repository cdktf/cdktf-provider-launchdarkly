# `launchdarkly_feature_flag`

Refer to the Terraform Registory for docs: [`launchdarkly_feature_flag`](https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag).

# `featureFlag` Submodule <a name="`featureFlag` Submodule" id="@cdktf/provider-launchdarkly.featureFlag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureFlag <a name="FeatureFlag" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag launchdarkly_feature_flag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

new featureFlag.FeatureFlag(scope: Construct, id: string, config: FeatureFlagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig">FeatureFlagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig">FeatureFlagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTemporary">resetTemporary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetVariations">resetVariations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putClientSideAvailability` <a name="putClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putClientSideAvailability"></a>

```typescript
public putClientSideAvailability(value: IResolvable | FeatureFlagClientSideAvailability[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putClientSideAvailability.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>[]

---

##### `putCustomProperties` <a name="putCustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putCustomProperties"></a>

```typescript
public putCustomProperties(value: IResolvable | FeatureFlagCustomProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putCustomProperties.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>[]

---

##### `putDefaults` <a name="putDefaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults"></a>

```typescript
public putDefaults(value: FeatureFlagDefaults): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

---

##### `putVariations` <a name="putVariations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putVariations"></a>

```typescript
public putVariations(value: IResolvable | FeatureFlagVariations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.putVariations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>[]

---

##### `resetArchived` <a name="resetArchived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetArchived"></a>

```typescript
public resetArchived(): void
```

##### `resetClientSideAvailability` <a name="resetClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetClientSideAvailability"></a>

```typescript
public resetClientSideAvailability(): void
```

##### `resetCustomProperties` <a name="resetCustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetCustomProperties"></a>

```typescript
public resetCustomProperties(): void
```

##### `resetDefaults` <a name="resetDefaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDefaults"></a>

```typescript
public resetDefaults(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeInSnippet` <a name="resetIncludeInSnippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetIncludeInSnippet"></a>

```typescript
public resetIncludeInSnippet(): void
```

##### `resetMaintainerId` <a name="resetMaintainerId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetMaintainerId"></a>

```typescript
public resetMaintainerId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemporary` <a name="resetTemporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetTemporary"></a>

```typescript
public resetTemporary(): void
```

##### `resetVariations` <a name="resetVariations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.resetVariations"></a>

```typescript
public resetVariations(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isConstruct"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

featureFlag.FeatureFlag.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

featureFlag.FeatureFlag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

featureFlag.FeatureFlag.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailability">clientSideAvailability</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList">FeatureFlagClientSideAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customProperties">customProperties</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList">FeatureFlagCustomPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaults">defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference">FeatureFlagDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variations">variations</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList">FeatureFlagVariationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archivedInput">archivedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailabilityInput">clientSideAvailabilityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customPropertiesInput">customPropertiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaultsInput">defaultsInput</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippetInput">includeInSnippetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerIdInput">maintainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKeyInput">projectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporaryInput">temporaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationsInput">variationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationTypeInput">variationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippet">includeInSnippet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerId">maintainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKey">projectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporary">temporary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationType">variationType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientSideAvailability`<sup>Required</sup> <a name="clientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailability"></a>

```typescript
public readonly clientSideAvailability: FeatureFlagClientSideAvailabilityList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList">FeatureFlagClientSideAvailabilityList</a>

---

##### `customProperties`<sup>Required</sup> <a name="customProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customProperties"></a>

```typescript
public readonly customProperties: FeatureFlagCustomPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList">FeatureFlagCustomPropertiesList</a>

---

##### `defaults`<sup>Required</sup> <a name="defaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaults"></a>

```typescript
public readonly defaults: FeatureFlagDefaultsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference">FeatureFlagDefaultsOutputReference</a>

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variations"></a>

```typescript
public readonly variations: FeatureFlagVariationsList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList">FeatureFlagVariationsList</a>

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archivedInput"></a>

```typescript
public readonly archivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientSideAvailabilityInput`<sup>Optional</sup> <a name="clientSideAvailabilityInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.clientSideAvailabilityInput"></a>

```typescript
public readonly clientSideAvailabilityInput: IResolvable | FeatureFlagClientSideAvailability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>[]

---

##### `customPropertiesInput`<sup>Optional</sup> <a name="customPropertiesInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.customPropertiesInput"></a>

```typescript
public readonly customPropertiesInput: IResolvable | FeatureFlagCustomProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>[]

---

##### `defaultsInput`<sup>Optional</sup> <a name="defaultsInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.defaultsInput"></a>

```typescript
public readonly defaultsInput: FeatureFlagDefaults;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeInSnippetInput`<sup>Optional</sup> <a name="includeInSnippetInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippetInput"></a>

```typescript
public readonly includeInSnippetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `maintainerIdInput`<sup>Optional</sup> <a name="maintainerIdInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerIdInput"></a>

```typescript
public readonly maintainerIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKeyInput"></a>

```typescript
public readonly projectKeyInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `temporaryInput`<sup>Optional</sup> <a name="temporaryInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporaryInput"></a>

```typescript
public readonly temporaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `variationsInput`<sup>Optional</sup> <a name="variationsInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationsInput"></a>

```typescript
public readonly variationsInput: IResolvable | FeatureFlagVariations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>[]

---

##### `variationTypeInput`<sup>Optional</sup> <a name="variationTypeInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationTypeInput"></a>

```typescript
public readonly variationTypeInput: string;
```

- *Type:* string

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeInSnippet`<sup>Required</sup> <a name="includeInSnippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.includeInSnippet"></a>

```typescript
public readonly includeInSnippet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `maintainerId`<sup>Required</sup> <a name="maintainerId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.maintainerId"></a>

```typescript
public readonly maintainerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `temporary`<sup>Required</sup> <a name="temporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.temporary"></a>

```typescript
public readonly temporary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `variationType`<sup>Required</sup> <a name="variationType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.variationType"></a>

```typescript
public readonly variationType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureFlagClientSideAvailability <a name="FeatureFlagClientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.Initializer"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

const featureFlagClientSideAvailability: featureFlag.FeatureFlagClientSideAvailability = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingEnvironmentId">usingEnvironmentId</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#using_environment_id FeatureFlag#using_environment_id}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingMobileKey">usingMobileKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#using_mobile_key FeatureFlag#using_mobile_key}. |

---

##### `usingEnvironmentId`<sup>Optional</sup> <a name="usingEnvironmentId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingEnvironmentId"></a>

```typescript
public readonly usingEnvironmentId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#using_environment_id FeatureFlag#using_environment_id}.

---

##### `usingMobileKey`<sup>Optional</sup> <a name="usingMobileKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability.property.usingMobileKey"></a>

```typescript
public readonly usingMobileKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#using_mobile_key FeatureFlag#using_mobile_key}.

---

### FeatureFlagConfig <a name="FeatureFlagConfig" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.Initializer"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

const featureFlagConfig: featureFlag.FeatureFlagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.key">key</a></code> | <code>string</code> | A unique key that will be used to reference the flag in your code. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.name">name</a></code> | <code>string</code> | A human-friendly name for the feature flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.projectKey">projectKey</a></code> | <code>string</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variationType">variationType</a></code> | <code>string</code> | The uniform type for all variations. Can be either "boolean", "string", "number", or "json". |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to archive the flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.clientSideAvailability">clientSideAvailability</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>[]</code> | client_side_availability block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.customProperties">customProperties</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>[]</code> | custom_properties block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.defaults">defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | defaults block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.description">description</a></code> | <code>string</code> | A short description of what the flag will be used for. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#id FeatureFlag#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.includeInSnippet">includeInSnippet</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not this flag should be made available to the client-side JavaScript SDK. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerId">maintainerId</a></code> | <code>string</code> | The LaunchDarkly id of the user who will maintain the flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.tags">tags</a></code> | <code>string[]</code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.temporary">temporary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not the flag is a temporary flag. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variations">variations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>[]</code> | variations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A unique key that will be used to reference the flag in your code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#key FeatureFlag#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-friendly name for the feature flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#name FeatureFlag#name}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#project_key FeatureFlag#project_key}

---

##### `variationType`<sup>Required</sup> <a name="variationType" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variationType"></a>

```typescript
public readonly variationType: string;
```

- *Type:* string

The uniform type for all variations. Can be either "boolean", "string", "number", or "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#variation_type FeatureFlag#variation_type}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to archive the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#archived FeatureFlag#archived}

---

##### `clientSideAvailability`<sup>Optional</sup> <a name="clientSideAvailability" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.clientSideAvailability"></a>

```typescript
public readonly clientSideAvailability: IResolvable | FeatureFlagClientSideAvailability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>[]

client_side_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#client_side_availability FeatureFlag#client_side_availability}

---

##### `customProperties`<sup>Optional</sup> <a name="customProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.customProperties"></a>

```typescript
public readonly customProperties: IResolvable | FeatureFlagCustomProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>[]

custom_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#custom_properties FeatureFlag#custom_properties}

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.defaults"></a>

```typescript
public readonly defaults: FeatureFlagDefaults;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#defaults FeatureFlag#defaults}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of what the flag will be used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#description FeatureFlag#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#id FeatureFlag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeInSnippet`<sup>Optional</sup> <a name="includeInSnippet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.includeInSnippet"></a>

```typescript
public readonly includeInSnippet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not this flag should be made available to the client-side JavaScript SDK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#include_in_snippet FeatureFlag#include_in_snippet}

---

##### `maintainerId`<sup>Optional</sup> <a name="maintainerId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.maintainerId"></a>

```typescript
public readonly maintainerId: string;
```

- *Type:* string

The LaunchDarkly id of the user who will maintain the flag.

If not set, the API will automatically apply the member associated with your Terraform API key or the most recently set maintainer

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#maintainer_id FeatureFlag#maintainer_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#tags FeatureFlag#tags}

---

##### `temporary`<sup>Optional</sup> <a name="temporary" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.temporary"></a>

```typescript
public readonly temporary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not the flag is a temporary flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#temporary FeatureFlag#temporary}

---

##### `variations`<sup>Optional</sup> <a name="variations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagConfig.property.variations"></a>

```typescript
public readonly variations: IResolvable | FeatureFlagVariations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>[]

variations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#variations FeatureFlag#variations}

---

### FeatureFlagCustomProperties <a name="FeatureFlagCustomProperties" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.Initializer"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

const featureFlagCustomProperties: featureFlag.FeatureFlagCustomProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#key FeatureFlag#key}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#name FeatureFlag#name}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.value">value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#value FeatureFlag#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#key FeatureFlag#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#name FeatureFlag#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#value FeatureFlag#value}.

---

### FeatureFlagDefaults <a name="FeatureFlagDefaults" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.Initializer"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

const featureFlagDefaults: featureFlag.FeatureFlagDefaults = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.offVariation">offVariation</a></code> | <code>number</code> | The index of the variation served when the flag is off for new environments. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.onVariation">onVariation</a></code> | <code>number</code> | The index of the variation served when the flag is on for new environments. |

---

##### `offVariation`<sup>Required</sup> <a name="offVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.offVariation"></a>

```typescript
public readonly offVariation: number;
```

- *Type:* number

The index of the variation served when the flag is off for new environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#off_variation FeatureFlag#off_variation}

---

##### `onVariation`<sup>Required</sup> <a name="onVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults.property.onVariation"></a>

```typescript
public readonly onVariation: number;
```

- *Type:* number

The index of the variation served when the flag is on for new environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#on_variation FeatureFlag#on_variation}

---

### FeatureFlagVariations <a name="FeatureFlagVariations" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.Initializer"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

const featureFlagVariations: featureFlag.FeatureFlagVariations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.value">value</a></code> | <code>string</code> | The value of the flag for this variation. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.description">description</a></code> | <code>string</code> | A description for the variation. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.name">name</a></code> | <code>string</code> | A name for the variation. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the flag for this variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#value FeatureFlag#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#description FeatureFlag#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/resources/feature_flag#name FeatureFlag#name}

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureFlagClientSideAvailabilityList <a name="FeatureFlagClientSideAvailabilityList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

new featureFlag.FeatureFlagClientSideAvailabilityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get"></a>

```typescript
public get(index: number): FeatureFlagClientSideAvailabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagClientSideAvailability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>[]

---


### FeatureFlagClientSideAvailabilityOutputReference <a name="FeatureFlagClientSideAvailabilityOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

new featureFlag.FeatureFlagClientSideAvailabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUsingEnvironmentId` <a name="resetUsingEnvironmentId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingEnvironmentId"></a>

```typescript
public resetUsingEnvironmentId(): void
```

##### `resetUsingMobileKey` <a name="resetUsingMobileKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.resetUsingMobileKey"></a>

```typescript
public resetUsingMobileKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput">usingEnvironmentIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKeyInput">usingMobileKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentId">usingEnvironmentId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKey">usingMobileKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usingEnvironmentIdInput`<sup>Optional</sup> <a name="usingEnvironmentIdInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput"></a>

```typescript
public readonly usingEnvironmentIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usingMobileKeyInput`<sup>Optional</sup> <a name="usingMobileKeyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKeyInput"></a>

```typescript
public readonly usingMobileKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usingEnvironmentId`<sup>Required</sup> <a name="usingEnvironmentId" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentId"></a>

```typescript
public readonly usingEnvironmentId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usingMobileKey`<sup>Required</sup> <a name="usingMobileKey" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKey"></a>

```typescript
public readonly usingMobileKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagClientSideAvailability;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagClientSideAvailability">FeatureFlagClientSideAvailability</a>

---


### FeatureFlagCustomPropertiesList <a name="FeatureFlagCustomPropertiesList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

new featureFlag.FeatureFlagCustomPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get"></a>

```typescript
public get(index: number): FeatureFlagCustomPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagCustomProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>[]

---


### FeatureFlagCustomPropertiesOutputReference <a name="FeatureFlagCustomPropertiesOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

new featureFlag.FeatureFlagCustomPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagCustomProperties;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagCustomProperties">FeatureFlagCustomProperties</a>

---


### FeatureFlagDefaultsOutputReference <a name="FeatureFlagDefaultsOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

new featureFlag.FeatureFlagDefaultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariationInput">offVariationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariationInput">onVariationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariation">offVariation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariation">onVariation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offVariationInput`<sup>Optional</sup> <a name="offVariationInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariationInput"></a>

```typescript
public readonly offVariationInput: number;
```

- *Type:* number

---

##### `onVariationInput`<sup>Optional</sup> <a name="onVariationInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariationInput"></a>

```typescript
public readonly onVariationInput: number;
```

- *Type:* number

---

##### `offVariation`<sup>Required</sup> <a name="offVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.offVariation"></a>

```typescript
public readonly offVariation: number;
```

- *Type:* number

---

##### `onVariation`<sup>Required</sup> <a name="onVariation" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.onVariation"></a>

```typescript
public readonly onVariation: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FeatureFlagDefaults;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagDefaults">FeatureFlagDefaults</a>

---


### FeatureFlagVariationsList <a name="FeatureFlagVariationsList" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

new featureFlag.FeatureFlagVariationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get"></a>

```typescript
public get(index: number): FeatureFlagVariationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagVariations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>[]

---


### FeatureFlagVariationsOutputReference <a name="FeatureFlagVariationsOutputReference" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer"></a>

```typescript
import { featureFlag } from '@cdktf/provider-launchdarkly'

new featureFlag.FeatureFlagVariationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagVariations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlag.FeatureFlagVariations">FeatureFlagVariations</a>

---



