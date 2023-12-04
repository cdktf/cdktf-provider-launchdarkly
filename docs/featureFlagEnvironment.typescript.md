# `featureFlagEnvironment` Submodule <a name="`featureFlagEnvironment` Submodule" id="@cdktf/provider-launchdarkly.featureFlagEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureFlagEnvironment <a name="FeatureFlagEnvironment" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment launchdarkly_feature_flag_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

new featureFlagEnvironment.FeatureFlagEnvironment(scope: Construct, id: string, config: FeatureFlagEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig">FeatureFlagEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig">FeatureFlagEnvironmentConfig</a>

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
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContextTargets` <a name="putContextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putContextTargets"></a>

```typescript
public putContextTargets(value: IResolvable | FeatureFlagEnvironmentContextTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putContextTargets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>[]

---

##### `putFallthrough` <a name="putFallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putFallthrough"></a>

```typescript
public putFallthrough(value: FeatureFlagEnvironmentFallthrough): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putFallthrough.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

---

##### `putPrerequisites` <a name="putPrerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putPrerequisites"></a>

```typescript
public putPrerequisites(value: IResolvable | FeatureFlagEnvironmentPrerequisites[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putPrerequisites.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>[]

---

##### `putRules` <a name="putRules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putRules"></a>

```typescript
public putRules(value: IResolvable | FeatureFlagEnvironmentRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>[]

---

##### `putTargets` <a name="putTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putTargets"></a>

```typescript
public putTargets(value: IResolvable | FeatureFlagEnvironmentTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.putTargets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>[]

---

##### `resetContextTargets` <a name="resetContextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetContextTargets"></a>

```typescript
public resetContextTargets(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOn` <a name="resetOn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetOn"></a>

```typescript
public resetOn(): void
```

##### `resetPrerequisites` <a name="resetPrerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetPrerequisites"></a>

```typescript
public resetPrerequisites(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetTargets` <a name="resetTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetTargets"></a>

```typescript
public resetTargets(): void
```

##### `resetTrackEvents` <a name="resetTrackEvents" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.resetTrackEvents"></a>

```typescript
public resetTrackEvents(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FeatureFlagEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isConstruct"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

featureFlagEnvironment.FeatureFlagEnvironment.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformElement"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

featureFlagEnvironment.FeatureFlagEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformResource"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

featureFlagEnvironment.FeatureFlagEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FeatureFlagEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FeatureFlagEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FeatureFlagEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FeatureFlagEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargets">contextTargets</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList">FeatureFlagEnvironmentContextTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthrough">fallthrough</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference">FeatureFlagEnvironmentFallthroughOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisites">prerequisites</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList">FeatureFlagEnvironmentPrerequisitesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList">FeatureFlagEnvironmentRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList">FeatureFlagEnvironmentTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargetsInput">contextTargetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKeyInput">envKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthroughInput">fallthroughInput</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagIdInput">flagIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariationInput">offVariationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.onInput">onInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisitesInput">prerequisitesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targetsInput">targetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEventsInput">trackEventsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKey">envKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagId">flagId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariation">offVariation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.on">on</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEvents">trackEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contextTargets`<sup>Required</sup> <a name="contextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargets"></a>

```typescript
public readonly contextTargets: FeatureFlagEnvironmentContextTargetsList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList">FeatureFlagEnvironmentContextTargetsList</a>

---

##### `fallthrough`<sup>Required</sup> <a name="fallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthrough"></a>

```typescript
public readonly fallthrough: FeatureFlagEnvironmentFallthroughOutputReference;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference">FeatureFlagEnvironmentFallthroughOutputReference</a>

---

##### `prerequisites`<sup>Required</sup> <a name="prerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisites"></a>

```typescript
public readonly prerequisites: FeatureFlagEnvironmentPrerequisitesList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList">FeatureFlagEnvironmentPrerequisitesList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rules"></a>

```typescript
public readonly rules: FeatureFlagEnvironmentRulesList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList">FeatureFlagEnvironmentRulesList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targets"></a>

```typescript
public readonly targets: FeatureFlagEnvironmentTargetsList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList">FeatureFlagEnvironmentTargetsList</a>

---

##### `contextTargetsInput`<sup>Optional</sup> <a name="contextTargetsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.contextTargetsInput"></a>

```typescript
public readonly contextTargetsInput: IResolvable | FeatureFlagEnvironmentContextTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>[]

---

##### `envKeyInput`<sup>Optional</sup> <a name="envKeyInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKeyInput"></a>

```typescript
public readonly envKeyInput: string;
```

- *Type:* string

---

##### `fallthroughInput`<sup>Optional</sup> <a name="fallthroughInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.fallthroughInput"></a>

```typescript
public readonly fallthroughInput: FeatureFlagEnvironmentFallthrough;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

---

##### `flagIdInput`<sup>Optional</sup> <a name="flagIdInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagIdInput"></a>

```typescript
public readonly flagIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `offVariationInput`<sup>Optional</sup> <a name="offVariationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariationInput"></a>

```typescript
public readonly offVariationInput: number;
```

- *Type:* number

---

##### `onInput`<sup>Optional</sup> <a name="onInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.onInput"></a>

```typescript
public readonly onInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prerequisitesInput`<sup>Optional</sup> <a name="prerequisitesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.prerequisitesInput"></a>

```typescript
public readonly prerequisitesInput: IResolvable | FeatureFlagEnvironmentPrerequisites[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>[]

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | FeatureFlagEnvironmentRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>[]

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | FeatureFlagEnvironmentTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>[]

---

##### `trackEventsInput`<sup>Optional</sup> <a name="trackEventsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEventsInput"></a>

```typescript
public readonly trackEventsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `envKey`<sup>Required</sup> <a name="envKey" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.envKey"></a>

```typescript
public readonly envKey: string;
```

- *Type:* string

---

##### `flagId`<sup>Required</sup> <a name="flagId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.flagId"></a>

```typescript
public readonly flagId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `offVariation`<sup>Required</sup> <a name="offVariation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.offVariation"></a>

```typescript
public readonly offVariation: number;
```

- *Type:* number

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.on"></a>

```typescript
public readonly on: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `trackEvents`<sup>Required</sup> <a name="trackEvents" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.trackEvents"></a>

```typescript
public readonly trackEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureFlagEnvironmentConfig <a name="FeatureFlagEnvironmentConfig" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

const featureFlagEnvironmentConfig: featureFlagEnvironment.FeatureFlagEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.envKey">envKey</a></code> | <code>string</code> | The environment key. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.fallthrough">fallthrough</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a></code> | fallthrough block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.flagId">flagId</a></code> | <code>string</code> | The feature flag's unique `id` in the format `project_key/flag_key`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.offVariation">offVariation</a></code> | <code>number</code> | The index of the variation to serve if targeting is disabled. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.contextTargets">contextTargets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>[]</code> | context_targets block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#id FeatureFlagEnvironment#id}. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.on">on</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether targeting is enabled. Defaults to `false` if not set. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.prerequisites">prerequisites</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>[]</code> | prerequisites block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.targets">targets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>[]</code> | targets block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.trackEvents">trackEvents</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to send event data back to LaunchDarkly. Defaults to `false` if not set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `envKey`<sup>Required</sup> <a name="envKey" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.envKey"></a>

```typescript
public readonly envKey: string;
```

- *Type:* string

The environment key.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#env_key FeatureFlagEnvironment#env_key}

---

##### `fallthrough`<sup>Required</sup> <a name="fallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.fallthrough"></a>

```typescript
public readonly fallthrough: FeatureFlagEnvironmentFallthrough;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

fallthrough block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#fallthrough FeatureFlagEnvironment#fallthrough}

---

##### `flagId`<sup>Required</sup> <a name="flagId" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.flagId"></a>

```typescript
public readonly flagId: string;
```

- *Type:* string

The feature flag's unique `id` in the format `project_key/flag_key`.

A change in this field will force the destruction of the existing resource and the creation of a new one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#flag_id FeatureFlagEnvironment#flag_id}

---

##### `offVariation`<sup>Required</sup> <a name="offVariation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.offVariation"></a>

```typescript
public readonly offVariation: number;
```

- *Type:* number

The index of the variation to serve if targeting is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#off_variation FeatureFlagEnvironment#off_variation}

---

##### `contextTargets`<sup>Optional</sup> <a name="contextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.contextTargets"></a>

```typescript
public readonly contextTargets: IResolvable | FeatureFlagEnvironmentContextTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>[]

context_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#context_targets FeatureFlagEnvironment#context_targets}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#id FeatureFlagEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on`<sup>Optional</sup> <a name="on" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.on"></a>

```typescript
public readonly on: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether targeting is enabled. Defaults to `false` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#on FeatureFlagEnvironment#on}

---

##### `prerequisites`<sup>Optional</sup> <a name="prerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.prerequisites"></a>

```typescript
public readonly prerequisites: IResolvable | FeatureFlagEnvironmentPrerequisites[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>[]

prerequisites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#prerequisites FeatureFlagEnvironment#prerequisites}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | FeatureFlagEnvironmentRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#rules FeatureFlagEnvironment#rules}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.targets"></a>

```typescript
public readonly targets: IResolvable | FeatureFlagEnvironmentTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>[]

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#targets FeatureFlagEnvironment#targets}

---

##### `trackEvents`<sup>Optional</sup> <a name="trackEvents" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentConfig.property.trackEvents"></a>

```typescript
public readonly trackEvents: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to send event data back to LaunchDarkly. Defaults to `false` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#track_events FeatureFlagEnvironment#track_events}

---

### FeatureFlagEnvironmentContextTargets <a name="FeatureFlagEnvironmentContextTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

const featureFlagEnvironmentContextTargets: featureFlagEnvironment.FeatureFlagEnvironmentContextTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.contextKind">contextKind</a></code> | <code>string</code> | The context kind on which the flag should target in this environment. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.values">values</a></code> | <code>string[]</code> | List of `user` strings to target. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.variation">variation</a></code> | <code>number</code> | The index of the variation to serve if a user target value is matched. |

---

##### `contextKind`<sup>Required</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.contextKind"></a>

```typescript
public readonly contextKind: string;
```

- *Type:* string

The context kind on which the flag should target in this environment.

User (`user`) targets should be specified as `targets` attribute blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

List of `user` strings to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets.property.variation"></a>

```typescript
public readonly variation: number;
```

- *Type:* number

The index of the variation to serve if a user target value is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentFallthrough <a name="FeatureFlagEnvironmentFallthrough" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

const featureFlagEnvironmentFallthrough: featureFlagEnvironment.FeatureFlagEnvironmentFallthrough = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.bucketBy">bucketBy</a></code> | <code>string</code> | Group percentage rollout by a custom attribute. This argument is only valid if rollout_weights is also specified. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.contextKind">contextKind</a></code> | <code>string</code> | The context kind associated with the specified rollout. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.rolloutWeights">rolloutWeights</a></code> | <code>number[]</code> | List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.variation">variation</a></code> | <code>number</code> | The default integer variation index to serve if no `prerequisites`, `target`, or `rules` apply. |

---

##### `bucketBy`<sup>Optional</sup> <a name="bucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.bucketBy"></a>

```typescript
public readonly bucketBy: string;
```

- *Type:* string

Group percentage rollout by a custom attribute. This argument is only valid if rollout_weights is also specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#bucket_by FeatureFlagEnvironment#bucket_by}

---

##### `contextKind`<sup>Optional</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.contextKind"></a>

```typescript
public readonly contextKind: string;
```

- *Type:* string

The context kind associated with the specified rollout.

This argument is only valid if rollout_weights is also specified. If omitted, defaults to `user`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}

---

##### `rolloutWeights`<sup>Optional</sup> <a name="rolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.rolloutWeights"></a>

```typescript
public readonly rolloutWeights: number[];
```

- *Type:* number[]

List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`.

The sum of the `rollout_weights` must equal 100000 and the number of rollout weights specified in the array must match the number of flag variations. You must specify either `variation` or `rollout_weights`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#rollout_weights FeatureFlagEnvironment#rollout_weights}

---

##### `variation`<sup>Optional</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough.property.variation"></a>

```typescript
public readonly variation: number;
```

- *Type:* number

The default integer variation index to serve if no `prerequisites`, `target`, or `rules` apply.

You must specify either `variation` or `rollout_weights`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentPrerequisites <a name="FeatureFlagEnvironmentPrerequisites" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

const featureFlagEnvironmentPrerequisites: featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.flagKey">flagKey</a></code> | <code>string</code> | The prerequisite feature flag's `key`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.variation">variation</a></code> | <code>number</code> | The index of the prerequisite feature flag's variation to target. |

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.flagKey"></a>

```typescript
public readonly flagKey: string;
```

- *Type:* string

The prerequisite feature flag's `key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#flag_key FeatureFlagEnvironment#flag_key}

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites.property.variation"></a>

```typescript
public readonly variation: number;
```

- *Type:* number

The index of the prerequisite feature flag's variation to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentRules <a name="FeatureFlagEnvironmentRules" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

const featureFlagEnvironmentRules: featureFlagEnvironment.FeatureFlagEnvironmentRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.bucketBy">bucketBy</a></code> | <code>string</code> | Group percentage rollout by a custom attribute. This argument is only valid if `rollout_weights` is also specified. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.clauses">clauses</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>[]</code> | clauses block. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.description">description</a></code> | <code>string</code> | A human-readable description of the targeting rule. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.rolloutWeights">rolloutWeights</a></code> | <code>number[]</code> | List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.variation">variation</a></code> | <code>number</code> | The integer variation index to serve if the rule clauses evaluate to `true`. |

---

##### `bucketBy`<sup>Optional</sup> <a name="bucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.bucketBy"></a>

```typescript
public readonly bucketBy: string;
```

- *Type:* string

Group percentage rollout by a custom attribute. This argument is only valid if `rollout_weights` is also specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#bucket_by FeatureFlagEnvironment#bucket_by}

---

##### `clauses`<sup>Optional</sup> <a name="clauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.clauses"></a>

```typescript
public readonly clauses: IResolvable | FeatureFlagEnvironmentRulesClauses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>[]

clauses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#clauses FeatureFlagEnvironment#clauses}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the targeting rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#description FeatureFlagEnvironment#description}

---

##### `rolloutWeights`<sup>Optional</sup> <a name="rolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.rolloutWeights"></a>

```typescript
public readonly rolloutWeights: number[];
```

- *Type:* number[]

List of integer percentage rollout weights (in thousandths of a percent) to apply to each variation if the rule clauses evaluates to `true`.

The sum of the `rollout_weights` must equal 100000 and the number of rollout weights specified in the array must match the number of flag variations. You must specify either `variation` or `rollout_weights`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#rollout_weights FeatureFlagEnvironment#rollout_weights}

---

##### `variation`<sup>Optional</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules.property.variation"></a>

```typescript
public readonly variation: number;
```

- *Type:* number

The integer variation index to serve if the rule clauses evaluate to `true`.

You must specify either `variation` or `rollout_weights`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

### FeatureFlagEnvironmentRulesClauses <a name="FeatureFlagEnvironmentRulesClauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

const featureFlagEnvironmentRulesClauses: featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.attribute">attribute</a></code> | <code>string</code> | The user attribute to operate on. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.op">op</a></code> | <code>string</code> | The operator associated with the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.values">values</a></code> | <code>string[]</code> | The list of values associated with the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.contextKind">contextKind</a></code> | <code>string</code> | The context kind associated with this rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to negate the rule clause. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.valueType">valueType</a></code> | <code>string</code> | The type for each of the clause's values. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

The user attribute to operate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#attribute FeatureFlagEnvironment#attribute}

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.op"></a>

```typescript
public readonly op: string;
```

- *Type:* string

The operator associated with the rule clause.

Available options are `in`, `endsWith`, `startsWith`, `matches`, `contains`, `lessThan`, `lessThanOrEqual`, `greaterThanOrEqual`, `before`, `after`, `segmentMatch`, `semVerEqual`, `semVerLessThan`, and `semVerGreaterThan`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#op FeatureFlagEnvironment#op}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The list of values associated with the rule clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}

---

##### `contextKind`<sup>Optional</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.contextKind"></a>

```typescript
public readonly contextKind: string;
```

- *Type:* string

The context kind associated with this rule clause.

This argument is only valid if `rollout_weights` is also specified. If omitted, defaults to `user`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#context_kind FeatureFlagEnvironment#context_kind}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to negate the rule clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#negate FeatureFlagEnvironment#negate}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

The type for each of the clause's values.

Available types are `boolean`, `string`, and `number`. If omitted, `value_type` defaults to `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#value_type FeatureFlagEnvironment#value_type}

---

### FeatureFlagEnvironmentTargets <a name="FeatureFlagEnvironmentTargets" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

const featureFlagEnvironmentTargets: featureFlagEnvironment.FeatureFlagEnvironmentTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.values">values</a></code> | <code>string[]</code> | List of `user` strings to target. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.variation">variation</a></code> | <code>number</code> | The index of the variation to serve if a user target value is matched. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

List of `user` strings to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#values FeatureFlagEnvironment#values}

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets.property.variation"></a>

```typescript
public readonly variation: number;
```

- *Type:* number

The index of the variation to serve if a user target value is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/feature_flag_environment#variation FeatureFlagEnvironment#variation}

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureFlagEnvironmentContextTargetsList <a name="FeatureFlagEnvironmentContextTargetsList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

new featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.get"></a>

```typescript
public get(index: number): FeatureFlagEnvironmentContextTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagEnvironmentContextTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>[]

---


### FeatureFlagEnvironmentContextTargetsOutputReference <a name="FeatureFlagEnvironmentContextTargetsOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

new featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKindInput">contextKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variationInput">variationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKind">contextKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variation">variation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contextKindInput`<sup>Optional</sup> <a name="contextKindInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKindInput"></a>

```typescript
public readonly contextKindInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variationInput"></a>

```typescript
public readonly variationInput: number;
```

- *Type:* number

---

##### `contextKind`<sup>Required</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.contextKind"></a>

```typescript
public readonly contextKind: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.variation"></a>

```typescript
public readonly variation: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagEnvironmentContextTargets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentContextTargets">FeatureFlagEnvironmentContextTargets</a>

---


### FeatureFlagEnvironmentFallthroughOutputReference <a name="FeatureFlagEnvironmentFallthroughOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

new featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketBy` <a name="resetBucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetBucketBy"></a>

```typescript
public resetBucketBy(): void
```

##### `resetContextKind` <a name="resetContextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetContextKind"></a>

```typescript
public resetContextKind(): void
```

##### `resetRolloutWeights` <a name="resetRolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetRolloutWeights"></a>

```typescript
public resetRolloutWeights(): void
```

##### `resetVariation` <a name="resetVariation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.resetVariation"></a>

```typescript
public resetVariation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketByInput">bucketByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKindInput">contextKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeightsInput">rolloutWeightsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variationInput">variationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketBy">bucketBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKind">contextKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeights">rolloutWeights</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variation">variation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketByInput`<sup>Optional</sup> <a name="bucketByInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketByInput"></a>

```typescript
public readonly bucketByInput: string;
```

- *Type:* string

---

##### `contextKindInput`<sup>Optional</sup> <a name="contextKindInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKindInput"></a>

```typescript
public readonly contextKindInput: string;
```

- *Type:* string

---

##### `rolloutWeightsInput`<sup>Optional</sup> <a name="rolloutWeightsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeightsInput"></a>

```typescript
public readonly rolloutWeightsInput: number[];
```

- *Type:* number[]

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variationInput"></a>

```typescript
public readonly variationInput: number;
```

- *Type:* number

---

##### `bucketBy`<sup>Required</sup> <a name="bucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.bucketBy"></a>

```typescript
public readonly bucketBy: string;
```

- *Type:* string

---

##### `contextKind`<sup>Required</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.contextKind"></a>

```typescript
public readonly contextKind: string;
```

- *Type:* string

---

##### `rolloutWeights`<sup>Required</sup> <a name="rolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.rolloutWeights"></a>

```typescript
public readonly rolloutWeights: number[];
```

- *Type:* number[]

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.variation"></a>

```typescript
public readonly variation: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthroughOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FeatureFlagEnvironmentFallthrough;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentFallthrough">FeatureFlagEnvironmentFallthrough</a>

---


### FeatureFlagEnvironmentPrerequisitesList <a name="FeatureFlagEnvironmentPrerequisitesList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

new featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.get"></a>

```typescript
public get(index: number): FeatureFlagEnvironmentPrerequisitesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagEnvironmentPrerequisites[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>[]

---


### FeatureFlagEnvironmentPrerequisitesOutputReference <a name="FeatureFlagEnvironmentPrerequisitesOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

new featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKeyInput">flagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variationInput">variationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKey">flagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variation">variation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flagKeyInput`<sup>Optional</sup> <a name="flagKeyInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKeyInput"></a>

```typescript
public readonly flagKeyInput: string;
```

- *Type:* string

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variationInput"></a>

```typescript
public readonly variationInput: number;
```

- *Type:* number

---

##### `flagKey`<sup>Required</sup> <a name="flagKey" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.flagKey"></a>

```typescript
public readonly flagKey: string;
```

- *Type:* string

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.variation"></a>

```typescript
public readonly variation: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisitesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagEnvironmentPrerequisites;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentPrerequisites">FeatureFlagEnvironmentPrerequisites</a>

---


### FeatureFlagEnvironmentRulesClausesList <a name="FeatureFlagEnvironmentRulesClausesList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

new featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.get"></a>

```typescript
public get(index: number): FeatureFlagEnvironmentRulesClausesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagEnvironmentRulesClauses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>[]

---


### FeatureFlagEnvironmentRulesClausesOutputReference <a name="FeatureFlagEnvironmentRulesClausesOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

new featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContextKind` <a name="resetContextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetContextKind"></a>

```typescript
public resetContextKind(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```

##### `resetValueType` <a name="resetValueType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.resetValueType"></a>

```typescript
public resetValueType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKindInput">contextKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.opInput">opInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKind">contextKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.op">op</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `contextKindInput`<sup>Optional</sup> <a name="contextKindInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKindInput"></a>

```typescript
public readonly contextKindInput: string;
```

- *Type:* string

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `opInput`<sup>Optional</sup> <a name="opInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.opInput"></a>

```typescript
public readonly opInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `contextKind`<sup>Required</sup> <a name="contextKind" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.contextKind"></a>

```typescript
public readonly contextKind: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.op"></a>

```typescript
public readonly op: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagEnvironmentRulesClauses;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>

---


### FeatureFlagEnvironmentRulesList <a name="FeatureFlagEnvironmentRulesList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

new featureFlagEnvironment.FeatureFlagEnvironmentRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.get"></a>

```typescript
public get(index: number): FeatureFlagEnvironmentRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagEnvironmentRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>[]

---


### FeatureFlagEnvironmentRulesOutputReference <a name="FeatureFlagEnvironmentRulesOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

new featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClauses` <a name="putClauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.putClauses"></a>

```typescript
public putClauses(value: IResolvable | FeatureFlagEnvironmentRulesClauses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.putClauses.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>[]

---

##### `resetBucketBy` <a name="resetBucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetBucketBy"></a>

```typescript
public resetBucketBy(): void
```

##### `resetClauses` <a name="resetClauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetClauses"></a>

```typescript
public resetClauses(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRolloutWeights` <a name="resetRolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetRolloutWeights"></a>

```typescript
public resetRolloutWeights(): void
```

##### `resetVariation` <a name="resetVariation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.resetVariation"></a>

```typescript
public resetVariation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clauses">clauses</a></code> | <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList">FeatureFlagEnvironmentRulesClausesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketByInput">bucketByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clausesInput">clausesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeightsInput">rolloutWeightsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variationInput">variationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketBy">bucketBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeights">rolloutWeights</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variation">variation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clauses`<sup>Required</sup> <a name="clauses" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clauses"></a>

```typescript
public readonly clauses: FeatureFlagEnvironmentRulesClausesList;
```

- *Type:* <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClausesList">FeatureFlagEnvironmentRulesClausesList</a>

---

##### `bucketByInput`<sup>Optional</sup> <a name="bucketByInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketByInput"></a>

```typescript
public readonly bucketByInput: string;
```

- *Type:* string

---

##### `clausesInput`<sup>Optional</sup> <a name="clausesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.clausesInput"></a>

```typescript
public readonly clausesInput: IResolvable | FeatureFlagEnvironmentRulesClauses[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesClauses">FeatureFlagEnvironmentRulesClauses</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `rolloutWeightsInput`<sup>Optional</sup> <a name="rolloutWeightsInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeightsInput"></a>

```typescript
public readonly rolloutWeightsInput: number[];
```

- *Type:* number[]

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variationInput"></a>

```typescript
public readonly variationInput: number;
```

- *Type:* number

---

##### `bucketBy`<sup>Required</sup> <a name="bucketBy" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.bucketBy"></a>

```typescript
public readonly bucketBy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `rolloutWeights`<sup>Required</sup> <a name="rolloutWeights" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.rolloutWeights"></a>

```typescript
public readonly rolloutWeights: number[];
```

- *Type:* number[]

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.variation"></a>

```typescript
public readonly variation: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagEnvironmentRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentRules">FeatureFlagEnvironmentRules</a>

---


### FeatureFlagEnvironmentTargetsList <a name="FeatureFlagEnvironmentTargetsList" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

new featureFlagEnvironment.FeatureFlagEnvironmentTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.get"></a>

```typescript
public get(index: number): FeatureFlagEnvironmentTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagEnvironmentTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>[]

---


### FeatureFlagEnvironmentTargetsOutputReference <a name="FeatureFlagEnvironmentTargetsOutputReference" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer"></a>

```typescript
import { featureFlagEnvironment } from '@cdktf/provider-launchdarkly'

new featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variationInput">variationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variation">variation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `variationInput`<sup>Optional</sup> <a name="variationInput" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variationInput"></a>

```typescript
public readonly variationInput: number;
```

- *Type:* number

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `variation`<sup>Required</sup> <a name="variation" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.variation"></a>

```typescript
public readonly variation: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FeatureFlagEnvironmentTargets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-launchdarkly.featureFlagEnvironment.FeatureFlagEnvironmentTargets">FeatureFlagEnvironmentTargets</a>

---



