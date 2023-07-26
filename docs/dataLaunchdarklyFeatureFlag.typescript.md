# `data_launchdarkly_feature_flag`

Refer to the Terraform Registory for docs: [`data_launchdarkly_feature_flag`](https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag).

# `dataLaunchdarklyFeatureFlag` Submodule <a name="`dataLaunchdarklyFeatureFlag` Submodule" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLaunchdarklyFeatureFlag <a name="DataLaunchdarklyFeatureFlag" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag launchdarkly_feature_flag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.Initializer"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag(scope: Construct, id: string, config: DataLaunchdarklyFeatureFlagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig">DataLaunchdarklyFeatureFlagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig">DataLaunchdarklyFeatureFlagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putClientSideAvailability">putClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putCustomProperties">putCustomProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putDefaults">putDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putVariations">putVariations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetClientSideAvailability">resetClientSideAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetCustomProperties">resetCustomProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetDefaults">resetDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetIncludeInSnippet">resetIncludeInSnippet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetMaintainerId">resetMaintainerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetTemporary">resetTemporary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetVariations">resetVariations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putClientSideAvailability` <a name="putClientSideAvailability" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putClientSideAvailability"></a>

```typescript
public putClientSideAvailability(value: IResolvable | DataLaunchdarklyFeatureFlagClientSideAvailability[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putClientSideAvailability.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability">DataLaunchdarklyFeatureFlagClientSideAvailability</a>[]

---

##### `putCustomProperties` <a name="putCustomProperties" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putCustomProperties"></a>

```typescript
public putCustomProperties(value: IResolvable | DataLaunchdarklyFeatureFlagCustomProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putCustomProperties.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties">DataLaunchdarklyFeatureFlagCustomProperties</a>[]

---

##### `putDefaults` <a name="putDefaults" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putDefaults"></a>

```typescript
public putDefaults(value: DataLaunchdarklyFeatureFlagDefaults): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults">DataLaunchdarklyFeatureFlagDefaults</a>

---

##### `putVariations` <a name="putVariations" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putVariations"></a>

```typescript
public putVariations(value: IResolvable | DataLaunchdarklyFeatureFlagVariations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.putVariations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations">DataLaunchdarklyFeatureFlagVariations</a>[]

---

##### `resetArchived` <a name="resetArchived" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetArchived"></a>

```typescript
public resetArchived(): void
```

##### `resetClientSideAvailability` <a name="resetClientSideAvailability" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetClientSideAvailability"></a>

```typescript
public resetClientSideAvailability(): void
```

##### `resetCustomProperties` <a name="resetCustomProperties" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetCustomProperties"></a>

```typescript
public resetCustomProperties(): void
```

##### `resetDefaults` <a name="resetDefaults" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetDefaults"></a>

```typescript
public resetDefaults(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeInSnippet` <a name="resetIncludeInSnippet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetIncludeInSnippet"></a>

```typescript
public resetIncludeInSnippet(): void
```

##### `resetMaintainerId` <a name="resetMaintainerId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetMaintainerId"></a>

```typescript
public resetMaintainerId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemporary` <a name="resetTemporary" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetTemporary"></a>

```typescript
public resetTemporary(): void
```

##### `resetVariations` <a name="resetVariations" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.resetVariations"></a>

```typescript
public resetVariations(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isConstruct"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isTerraformElement"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isTerraformDataSource"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.clientSideAvailability">clientSideAvailability</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList">DataLaunchdarklyFeatureFlagClientSideAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.customProperties">customProperties</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList">DataLaunchdarklyFeatureFlagCustomPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.defaults">defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference">DataLaunchdarklyFeatureFlagDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.variations">variations</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList">DataLaunchdarklyFeatureFlagVariationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.variationType">variationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.archivedInput">archivedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.clientSideAvailabilityInput">clientSideAvailabilityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability">DataLaunchdarklyFeatureFlagClientSideAvailability</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.customPropertiesInput">customPropertiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties">DataLaunchdarklyFeatureFlagCustomProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.defaultsInput">defaultsInput</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults">DataLaunchdarklyFeatureFlagDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.includeInSnippetInput">includeInSnippetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.maintainerIdInput">maintainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.projectKeyInput">projectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.temporaryInput">temporaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.variationsInput">variationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations">DataLaunchdarklyFeatureFlagVariations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.includeInSnippet">includeInSnippet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.maintainerId">maintainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.projectKey">projectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.temporary">temporary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `clientSideAvailability`<sup>Required</sup> <a name="clientSideAvailability" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.clientSideAvailability"></a>

```typescript
public readonly clientSideAvailability: DataLaunchdarklyFeatureFlagClientSideAvailabilityList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList">DataLaunchdarklyFeatureFlagClientSideAvailabilityList</a>

---

##### `customProperties`<sup>Required</sup> <a name="customProperties" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.customProperties"></a>

```typescript
public readonly customProperties: DataLaunchdarklyFeatureFlagCustomPropertiesList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList">DataLaunchdarklyFeatureFlagCustomPropertiesList</a>

---

##### `defaults`<sup>Required</sup> <a name="defaults" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.defaults"></a>

```typescript
public readonly defaults: DataLaunchdarklyFeatureFlagDefaultsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference">DataLaunchdarklyFeatureFlagDefaultsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `variations`<sup>Required</sup> <a name="variations" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.variations"></a>

```typescript
public readonly variations: DataLaunchdarklyFeatureFlagVariationsList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList">DataLaunchdarklyFeatureFlagVariationsList</a>

---

##### `variationType`<sup>Required</sup> <a name="variationType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.variationType"></a>

```typescript
public readonly variationType: string;
```

- *Type:* string

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.archivedInput"></a>

```typescript
public readonly archivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientSideAvailabilityInput`<sup>Optional</sup> <a name="clientSideAvailabilityInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.clientSideAvailabilityInput"></a>

```typescript
public readonly clientSideAvailabilityInput: IResolvable | DataLaunchdarklyFeatureFlagClientSideAvailability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability">DataLaunchdarklyFeatureFlagClientSideAvailability</a>[]

---

##### `customPropertiesInput`<sup>Optional</sup> <a name="customPropertiesInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.customPropertiesInput"></a>

```typescript
public readonly customPropertiesInput: IResolvable | DataLaunchdarklyFeatureFlagCustomProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties">DataLaunchdarklyFeatureFlagCustomProperties</a>[]

---

##### `defaultsInput`<sup>Optional</sup> <a name="defaultsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.defaultsInput"></a>

```typescript
public readonly defaultsInput: DataLaunchdarklyFeatureFlagDefaults;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults">DataLaunchdarklyFeatureFlagDefaults</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeInSnippetInput`<sup>Optional</sup> <a name="includeInSnippetInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.includeInSnippetInput"></a>

```typescript
public readonly includeInSnippetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `maintainerIdInput`<sup>Optional</sup> <a name="maintainerIdInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.maintainerIdInput"></a>

```typescript
public readonly maintainerIdInput: string;
```

- *Type:* string

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.projectKeyInput"></a>

```typescript
public readonly projectKeyInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `temporaryInput`<sup>Optional</sup> <a name="temporaryInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.temporaryInput"></a>

```typescript
public readonly temporaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `variationsInput`<sup>Optional</sup> <a name="variationsInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.variationsInput"></a>

```typescript
public readonly variationsInput: IResolvable | DataLaunchdarklyFeatureFlagVariations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations">DataLaunchdarklyFeatureFlagVariations</a>[]

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeInSnippet`<sup>Required</sup> <a name="includeInSnippet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.includeInSnippet"></a>

```typescript
public readonly includeInSnippet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `maintainerId`<sup>Required</sup> <a name="maintainerId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.maintainerId"></a>

```typescript
public readonly maintainerId: string;
```

- *Type:* string

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `temporary`<sup>Required</sup> <a name="temporary" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.temporary"></a>

```typescript
public readonly temporary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLaunchdarklyFeatureFlagClientSideAvailability <a name="DataLaunchdarklyFeatureFlagClientSideAvailability" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability.Initializer"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

const dataLaunchdarklyFeatureFlagClientSideAvailability: dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability.property.usingEnvironmentId">usingEnvironmentId</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#using_environment_id DataLaunchdarklyFeatureFlag#using_environment_id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability.property.usingMobileKey">usingMobileKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#using_mobile_key DataLaunchdarklyFeatureFlag#using_mobile_key}. |

---

##### `usingEnvironmentId`<sup>Optional</sup> <a name="usingEnvironmentId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability.property.usingEnvironmentId"></a>

```typescript
public readonly usingEnvironmentId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#using_environment_id DataLaunchdarklyFeatureFlag#using_environment_id}.

---

##### `usingMobileKey`<sup>Optional</sup> <a name="usingMobileKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability.property.usingMobileKey"></a>

```typescript
public readonly usingMobileKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#using_mobile_key DataLaunchdarklyFeatureFlag#using_mobile_key}.

---

### DataLaunchdarklyFeatureFlagConfig <a name="DataLaunchdarklyFeatureFlagConfig" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.Initializer"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

const dataLaunchdarklyFeatureFlagConfig: dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.key">key</a></code> | <code>string</code> | A unique key that will be used to reference the flag in your code. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.projectKey">projectKey</a></code> | <code>string</code> | The LaunchDarkly project key. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to archive the flag. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.clientSideAvailability">clientSideAvailability</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability">DataLaunchdarklyFeatureFlagClientSideAvailability</a>[]</code> | client_side_availability block. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.customProperties">customProperties</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties">DataLaunchdarklyFeatureFlagCustomProperties</a>[]</code> | custom_properties block. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.defaults">defaults</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults">DataLaunchdarklyFeatureFlagDefaults</a></code> | defaults block. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.description">description</a></code> | <code>string</code> | A short description of what the flag will be used for. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#id DataLaunchdarklyFeatureFlag#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.includeInSnippet">includeInSnippet</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not this flag should be made available to the client-side JavaScript SDK. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.maintainerId">maintainerId</a></code> | <code>string</code> | The LaunchDarkly id of the user who will maintain the flag. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.tags">tags</a></code> | <code>string[]</code> | Tags associated with your resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.temporary">temporary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not the flag is a temporary flag. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.variations">variations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations">DataLaunchdarklyFeatureFlagVariations</a>[]</code> | variations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A unique key that will be used to reference the flag in your code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#key DataLaunchdarklyFeatureFlag#key}

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

The LaunchDarkly project key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#project_key DataLaunchdarklyFeatureFlag#project_key}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to archive the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#archived DataLaunchdarklyFeatureFlag#archived}

---

##### `clientSideAvailability`<sup>Optional</sup> <a name="clientSideAvailability" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.clientSideAvailability"></a>

```typescript
public readonly clientSideAvailability: IResolvable | DataLaunchdarklyFeatureFlagClientSideAvailability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability">DataLaunchdarklyFeatureFlagClientSideAvailability</a>[]

client_side_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#client_side_availability DataLaunchdarklyFeatureFlag#client_side_availability}

---

##### `customProperties`<sup>Optional</sup> <a name="customProperties" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.customProperties"></a>

```typescript
public readonly customProperties: IResolvable | DataLaunchdarklyFeatureFlagCustomProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties">DataLaunchdarklyFeatureFlagCustomProperties</a>[]

custom_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#custom_properties DataLaunchdarklyFeatureFlag#custom_properties}

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.defaults"></a>

```typescript
public readonly defaults: DataLaunchdarklyFeatureFlagDefaults;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults">DataLaunchdarklyFeatureFlagDefaults</a>

defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#defaults DataLaunchdarklyFeatureFlag#defaults}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of what the flag will be used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#description DataLaunchdarklyFeatureFlag#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#id DataLaunchdarklyFeatureFlag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeInSnippet`<sup>Optional</sup> <a name="includeInSnippet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.includeInSnippet"></a>

```typescript
public readonly includeInSnippet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not this flag should be made available to the client-side JavaScript SDK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#include_in_snippet DataLaunchdarklyFeatureFlag#include_in_snippet}

---

##### `maintainerId`<sup>Optional</sup> <a name="maintainerId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.maintainerId"></a>

```typescript
public readonly maintainerId: string;
```

- *Type:* string

The LaunchDarkly id of the user who will maintain the flag.

If not set, the API will automatically apply the member associated with your Terraform API key or the most recently set maintainer

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#maintainer_id DataLaunchdarklyFeatureFlag#maintainer_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Tags associated with your resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#tags DataLaunchdarklyFeatureFlag#tags}

---

##### `temporary`<sup>Optional</sup> <a name="temporary" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.temporary"></a>

```typescript
public readonly temporary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not the flag is a temporary flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#temporary DataLaunchdarklyFeatureFlag#temporary}

---

##### `variations`<sup>Optional</sup> <a name="variations" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagConfig.property.variations"></a>

```typescript
public readonly variations: IResolvable | DataLaunchdarklyFeatureFlagVariations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations">DataLaunchdarklyFeatureFlagVariations</a>[]

variations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#variations DataLaunchdarklyFeatureFlag#variations}

---

### DataLaunchdarklyFeatureFlagCustomProperties <a name="DataLaunchdarklyFeatureFlagCustomProperties" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties.Initializer"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

const dataLaunchdarklyFeatureFlagCustomProperties: dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#key DataLaunchdarklyFeatureFlag#key}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#name DataLaunchdarklyFeatureFlag#name}. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties.property.value">value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#value DataLaunchdarklyFeatureFlag#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#key DataLaunchdarklyFeatureFlag#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#name DataLaunchdarklyFeatureFlag#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#value DataLaunchdarklyFeatureFlag#value}.

---

### DataLaunchdarklyFeatureFlagDefaults <a name="DataLaunchdarklyFeatureFlagDefaults" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults.Initializer"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

const dataLaunchdarklyFeatureFlagDefaults: dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults.property.offVariation">offVariation</a></code> | <code>number</code> | The index of the variation served when the flag is off for new environments. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults.property.onVariation">onVariation</a></code> | <code>number</code> | The index of the variation served when the flag is on for new environments. |

---

##### `offVariation`<sup>Required</sup> <a name="offVariation" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults.property.offVariation"></a>

```typescript
public readonly offVariation: number;
```

- *Type:* number

The index of the variation served when the flag is off for new environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#off_variation DataLaunchdarklyFeatureFlag#off_variation}

---

##### `onVariation`<sup>Required</sup> <a name="onVariation" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults.property.onVariation"></a>

```typescript
public readonly onVariation: number;
```

- *Type:* number

The index of the variation served when the flag is on for new environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#on_variation DataLaunchdarklyFeatureFlag#on_variation}

---

### DataLaunchdarklyFeatureFlagVariations <a name="DataLaunchdarklyFeatureFlagVariations" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations.Initializer"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

const dataLaunchdarklyFeatureFlagVariations: dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations.property.value">value</a></code> | <code>string</code> | The value of the flag for this variation. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations.property.description">description</a></code> | <code>string</code> | A description for the variation. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations.property.name">name</a></code> | <code>string</code> | A name for the variation. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the flag for this variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#value DataLaunchdarklyFeatureFlag#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#description DataLaunchdarklyFeatureFlag#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the variation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag#name DataLaunchdarklyFeatureFlag#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataLaunchdarklyFeatureFlagClientSideAvailabilityList <a name="DataLaunchdarklyFeatureFlagClientSideAvailabilityList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.Initializer"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.get"></a>

```typescript
public get(index: number): DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability">DataLaunchdarklyFeatureFlagClientSideAvailability</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLaunchdarklyFeatureFlagClientSideAvailability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability">DataLaunchdarklyFeatureFlagClientSideAvailability</a>[]

---


### DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference <a name="DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.resetUsingEnvironmentId">resetUsingEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.resetUsingMobileKey">resetUsingMobileKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUsingEnvironmentId` <a name="resetUsingEnvironmentId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.resetUsingEnvironmentId"></a>

```typescript
public resetUsingEnvironmentId(): void
```

##### `resetUsingMobileKey` <a name="resetUsingMobileKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.resetUsingMobileKey"></a>

```typescript
public resetUsingMobileKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput">usingEnvironmentIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKeyInput">usingMobileKeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentId">usingEnvironmentId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKey">usingMobileKey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability">DataLaunchdarklyFeatureFlagClientSideAvailability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usingEnvironmentIdInput`<sup>Optional</sup> <a name="usingEnvironmentIdInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentIdInput"></a>

```typescript
public readonly usingEnvironmentIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usingMobileKeyInput`<sup>Optional</sup> <a name="usingMobileKeyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKeyInput"></a>

```typescript
public readonly usingMobileKeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usingEnvironmentId`<sup>Required</sup> <a name="usingEnvironmentId" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingEnvironmentId"></a>

```typescript
public readonly usingEnvironmentId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usingMobileKey`<sup>Required</sup> <a name="usingMobileKey" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.usingMobileKey"></a>

```typescript
public readonly usingMobileKey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLaunchdarklyFeatureFlagClientSideAvailability;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagClientSideAvailability">DataLaunchdarklyFeatureFlagClientSideAvailability</a>

---


### DataLaunchdarklyFeatureFlagCustomPropertiesList <a name="DataLaunchdarklyFeatureFlagCustomPropertiesList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.Initializer"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.get"></a>

```typescript
public get(index: number): DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties">DataLaunchdarklyFeatureFlagCustomProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLaunchdarklyFeatureFlagCustomProperties[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties">DataLaunchdarklyFeatureFlagCustomProperties</a>[]

---


### DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference <a name="DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties">DataLaunchdarklyFeatureFlagCustomProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLaunchdarklyFeatureFlagCustomProperties;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagCustomProperties">DataLaunchdarklyFeatureFlagCustomProperties</a>

---


### DataLaunchdarklyFeatureFlagDefaultsOutputReference <a name="DataLaunchdarklyFeatureFlagDefaultsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.Initializer"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.offVariationInput">offVariationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.onVariationInput">onVariationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.offVariation">offVariation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.onVariation">onVariation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults">DataLaunchdarklyFeatureFlagDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offVariationInput`<sup>Optional</sup> <a name="offVariationInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.offVariationInput"></a>

```typescript
public readonly offVariationInput: number;
```

- *Type:* number

---

##### `onVariationInput`<sup>Optional</sup> <a name="onVariationInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.onVariationInput"></a>

```typescript
public readonly onVariationInput: number;
```

- *Type:* number

---

##### `offVariation`<sup>Required</sup> <a name="offVariation" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.offVariation"></a>

```typescript
public readonly offVariation: number;
```

- *Type:* number

---

##### `onVariation`<sup>Required</sup> <a name="onVariation" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.onVariation"></a>

```typescript
public readonly onVariation: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLaunchdarklyFeatureFlagDefaults;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagDefaults">DataLaunchdarklyFeatureFlagDefaults</a>

---


### DataLaunchdarklyFeatureFlagVariationsList <a name="DataLaunchdarklyFeatureFlagVariationsList" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.Initializer"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.get"></a>

```typescript
public get(index: number): DataLaunchdarklyFeatureFlagVariationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations">DataLaunchdarklyFeatureFlagVariations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLaunchdarklyFeatureFlagVariations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations">DataLaunchdarklyFeatureFlagVariations</a>[]

---


### DataLaunchdarklyFeatureFlagVariationsOutputReference <a name="DataLaunchdarklyFeatureFlagVariationsOutputReference" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer"></a>

```typescript
import { dataLaunchdarklyFeatureFlag } from '@cdktf/provider-launchdarkly'

new dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations">DataLaunchdarklyFeatureFlagVariations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLaunchdarklyFeatureFlagVariations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.dataLaunchdarklyFeatureFlag.DataLaunchdarklyFeatureFlagVariations">DataLaunchdarklyFeatureFlagVariations</a>

---



