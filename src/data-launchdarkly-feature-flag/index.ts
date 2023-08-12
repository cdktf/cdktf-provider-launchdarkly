// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLaunchdarklyFeatureFlagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to archive the flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#archived DataLaunchdarklyFeatureFlag#archived}
  */
  readonly archived?: boolean | cdktf.IResolvable;
  /**
  * A short description of what the flag will be used for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#description DataLaunchdarklyFeatureFlag#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#id DataLaunchdarklyFeatureFlag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether or not this flag should be made available to the client-side JavaScript SDK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#include_in_snippet DataLaunchdarklyFeatureFlag#include_in_snippet}
  */
  readonly includeInSnippet?: boolean | cdktf.IResolvable;
  /**
  * A unique key that will be used to reference the flag in your code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#key DataLaunchdarklyFeatureFlag#key}
  */
  readonly key: string;
  /**
  * The LaunchDarkly id of the user who will maintain the flag. If not set, the API will automatically apply the member associated with your Terraform API key or the most recently set maintainer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#maintainer_id DataLaunchdarklyFeatureFlag#maintainer_id}
  */
  readonly maintainerId?: string;
  /**
  * The LaunchDarkly project key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#project_key DataLaunchdarklyFeatureFlag#project_key}
  */
  readonly projectKey: string;
  /**
  * Whether or not the flag is a temporary flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#temporary DataLaunchdarklyFeatureFlag#temporary}
  */
  readonly temporary?: boolean | cdktf.IResolvable;
  /**
  * client_side_availability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#client_side_availability DataLaunchdarklyFeatureFlag#client_side_availability}
  */
  readonly clientSideAvailability?: DataLaunchdarklyFeatureFlagClientSideAvailability[] | cdktf.IResolvable;
  /**
  * custom_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#custom_properties DataLaunchdarklyFeatureFlag#custom_properties}
  */
  readonly customProperties?: DataLaunchdarklyFeatureFlagCustomProperties[] | cdktf.IResolvable;
  /**
  * defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#defaults DataLaunchdarklyFeatureFlag#defaults}
  */
  readonly defaults?: DataLaunchdarklyFeatureFlagDefaults;
  /**
  * variations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#variations DataLaunchdarklyFeatureFlag#variations}
  */
  readonly variations?: DataLaunchdarklyFeatureFlagVariations[] | cdktf.IResolvable;
}
export interface DataLaunchdarklyFeatureFlagClientSideAvailability {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#using_environment_id DataLaunchdarklyFeatureFlag#using_environment_id}
  */
  readonly usingEnvironmentId?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#using_mobile_key DataLaunchdarklyFeatureFlag#using_mobile_key}
  */
  readonly usingMobileKey?: boolean | cdktf.IResolvable;
}

export function dataLaunchdarklyFeatureFlagClientSideAvailabilityToTerraform(struct?: DataLaunchdarklyFeatureFlagClientSideAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    using_environment_id: cdktf.booleanToTerraform(struct!.usingEnvironmentId),
    using_mobile_key: cdktf.booleanToTerraform(struct!.usingMobileKey),
  }
}

export class DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLaunchdarklyFeatureFlagClientSideAvailability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usingEnvironmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.usingEnvironmentId = this._usingEnvironmentId;
    }
    if (this._usingMobileKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usingMobileKey = this._usingMobileKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyFeatureFlagClientSideAvailability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._usingEnvironmentId = undefined;
      this._usingMobileKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._usingEnvironmentId = value.usingEnvironmentId;
      this._usingMobileKey = value.usingMobileKey;
    }
  }

  // using_environment_id - computed: true, optional: true, required: false
  private _usingEnvironmentId?: boolean | cdktf.IResolvable; 
  public get usingEnvironmentId() {
    return this.getBooleanAttribute('using_environment_id');
  }
  public set usingEnvironmentId(value: boolean | cdktf.IResolvable) {
    this._usingEnvironmentId = value;
  }
  public resetUsingEnvironmentId() {
    this._usingEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingEnvironmentIdInput() {
    return this._usingEnvironmentId;
  }

  // using_mobile_key - computed: false, optional: true, required: false
  private _usingMobileKey?: boolean | cdktf.IResolvable; 
  public get usingMobileKey() {
    return this.getBooleanAttribute('using_mobile_key');
  }
  public set usingMobileKey(value: boolean | cdktf.IResolvable) {
    this._usingMobileKey = value;
  }
  public resetUsingMobileKey() {
    this._usingMobileKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingMobileKeyInput() {
    return this._usingMobileKey;
  }
}

export class DataLaunchdarklyFeatureFlagClientSideAvailabilityList extends cdktf.ComplexList {
  public internalValue? : DataLaunchdarklyFeatureFlagClientSideAvailability[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference {
    return new DataLaunchdarklyFeatureFlagClientSideAvailabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLaunchdarklyFeatureFlagCustomProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#key DataLaunchdarklyFeatureFlag#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#name DataLaunchdarklyFeatureFlag#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#value DataLaunchdarklyFeatureFlag#value}
  */
  readonly value: string[];
}

export function dataLaunchdarklyFeatureFlagCustomPropertiesToTerraform(struct?: DataLaunchdarklyFeatureFlagCustomProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}

export class DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLaunchdarklyFeatureFlagCustomProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyFeatureFlagCustomProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataLaunchdarklyFeatureFlagCustomPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataLaunchdarklyFeatureFlagCustomProperties[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference {
    return new DataLaunchdarklyFeatureFlagCustomPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLaunchdarklyFeatureFlagDefaults {
  /**
  * The index of the variation served when the flag is off for new environments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#off_variation DataLaunchdarklyFeatureFlag#off_variation}
  */
  readonly offVariation: number;
  /**
  * The index of the variation served when the flag is on for new environments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#on_variation DataLaunchdarklyFeatureFlag#on_variation}
  */
  readonly onVariation: number;
}

export function dataLaunchdarklyFeatureFlagDefaultsToTerraform(struct?: DataLaunchdarklyFeatureFlagDefaultsOutputReference | DataLaunchdarklyFeatureFlagDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    off_variation: cdktf.numberToTerraform(struct!.offVariation),
    on_variation: cdktf.numberToTerraform(struct!.onVariation),
  }
}

export class DataLaunchdarklyFeatureFlagDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLaunchdarklyFeatureFlagDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offVariation !== undefined) {
      hasAnyValues = true;
      internalValueResult.offVariation = this._offVariation;
    }
    if (this._onVariation !== undefined) {
      hasAnyValues = true;
      internalValueResult.onVariation = this._onVariation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyFeatureFlagDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offVariation = undefined;
      this._onVariation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offVariation = value.offVariation;
      this._onVariation = value.onVariation;
    }
  }

  // off_variation - computed: false, optional: false, required: true
  private _offVariation?: number; 
  public get offVariation() {
    return this.getNumberAttribute('off_variation');
  }
  public set offVariation(value: number) {
    this._offVariation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offVariationInput() {
    return this._offVariation;
  }

  // on_variation - computed: false, optional: false, required: true
  private _onVariation?: number; 
  public get onVariation() {
    return this.getNumberAttribute('on_variation');
  }
  public set onVariation(value: number) {
    this._onVariation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onVariationInput() {
    return this._onVariation;
  }
}
export interface DataLaunchdarklyFeatureFlagVariations {
  /**
  * A description for the variation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#description DataLaunchdarklyFeatureFlag#description}
  */
  readonly description?: string;
  /**
  * A name for the variation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#name DataLaunchdarklyFeatureFlag#name}
  */
  readonly name?: string;
  /**
  * The value of the flag for this variation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag#value DataLaunchdarklyFeatureFlag#value}
  */
  readonly value: string;
}

export function dataLaunchdarklyFeatureFlagVariationsToTerraform(struct?: DataLaunchdarklyFeatureFlagVariations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataLaunchdarklyFeatureFlagVariationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLaunchdarklyFeatureFlagVariations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyFeatureFlagVariations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataLaunchdarklyFeatureFlagVariationsList extends cdktf.ComplexList {
  public internalValue? : DataLaunchdarklyFeatureFlagVariations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLaunchdarklyFeatureFlagVariationsOutputReference {
    return new DataLaunchdarklyFeatureFlagVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag launchdarkly_feature_flag}
*/
export class DataLaunchdarklyFeatureFlag extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_feature_flag";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.0/docs/data-sources/feature_flag launchdarkly_feature_flag} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLaunchdarklyFeatureFlagConfig
  */
  public constructor(scope: Construct, id: string, config: DataLaunchdarklyFeatureFlagConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_feature_flag',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.15.0',
        providerVersionConstraint: '~> 2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archived = config.archived;
    this._description = config.description;
    this._id = config.id;
    this._includeInSnippet = config.includeInSnippet;
    this._key = config.key;
    this._maintainerId = config.maintainerId;
    this._projectKey = config.projectKey;
    this._temporary = config.temporary;
    this._clientSideAvailability.internalValue = config.clientSideAvailability;
    this._customProperties.internalValue = config.customProperties;
    this._defaults.internalValue = config.defaults;
    this._variations.internalValue = config.variations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archived - computed: false, optional: true, required: false
  private _archived?: boolean | cdktf.IResolvable; 
  public get archived() {
    return this.getBooleanAttribute('archived');
  }
  public set archived(value: boolean | cdktf.IResolvable) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_in_snippet - computed: true, optional: true, required: false
  private _includeInSnippet?: boolean | cdktf.IResolvable; 
  public get includeInSnippet() {
    return this.getBooleanAttribute('include_in_snippet');
  }
  public set includeInSnippet(value: boolean | cdktf.IResolvable) {
    this._includeInSnippet = value;
  }
  public resetIncludeInSnippet() {
    this._includeInSnippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInSnippetInput() {
    return this._includeInSnippet;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // maintainer_id - computed: true, optional: true, required: false
  private _maintainerId?: string; 
  public get maintainerId() {
    return this.getStringAttribute('maintainer_id');
  }
  public set maintainerId(value: string) {
    this._maintainerId = value;
  }
  public resetMaintainerId() {
    this._maintainerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainerIdInput() {
    return this._maintainerId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // temporary - computed: false, optional: true, required: false
  private _temporary?: boolean | cdktf.IResolvable; 
  public get temporary() {
    return this.getBooleanAttribute('temporary');
  }
  public set temporary(value: boolean | cdktf.IResolvable) {
    this._temporary = value;
  }
  public resetTemporary() {
    this._temporary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryInput() {
    return this._temporary;
  }

  // variation_type - computed: true, optional: false, required: false
  public get variationType() {
    return this.getStringAttribute('variation_type');
  }

  // client_side_availability - computed: false, optional: true, required: false
  private _clientSideAvailability = new DataLaunchdarklyFeatureFlagClientSideAvailabilityList(this, "client_side_availability", false);
  public get clientSideAvailability() {
    return this._clientSideAvailability;
  }
  public putClientSideAvailability(value: DataLaunchdarklyFeatureFlagClientSideAvailability[] | cdktf.IResolvable) {
    this._clientSideAvailability.internalValue = value;
  }
  public resetClientSideAvailability() {
    this._clientSideAvailability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSideAvailabilityInput() {
    return this._clientSideAvailability.internalValue;
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties = new DataLaunchdarklyFeatureFlagCustomPropertiesList(this, "custom_properties", true);
  public get customProperties() {
    return this._customProperties;
  }
  public putCustomProperties(value: DataLaunchdarklyFeatureFlagCustomProperties[] | cdktf.IResolvable) {
    this._customProperties.internalValue = value;
  }
  public resetCustomProperties() {
    this._customProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties.internalValue;
  }

  // defaults - computed: false, optional: true, required: false
  private _defaults = new DataLaunchdarklyFeatureFlagDefaultsOutputReference(this, "defaults");
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: DataLaunchdarklyFeatureFlagDefaults) {
    this._defaults.internalValue = value;
  }
  public resetDefaults() {
    this._defaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsInput() {
    return this._defaults.internalValue;
  }

  // variations - computed: false, optional: true, required: false
  private _variations = new DataLaunchdarklyFeatureFlagVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
  public putVariations(value: DataLaunchdarklyFeatureFlagVariations[] | cdktf.IResolvable) {
    this._variations.internalValue = value;
  }
  public resetVariations() {
    this._variations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationsInput() {
    return this._variations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archived: cdktf.booleanToTerraform(this._archived),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      include_in_snippet: cdktf.booleanToTerraform(this._includeInSnippet),
      key: cdktf.stringToTerraform(this._key),
      maintainer_id: cdktf.stringToTerraform(this._maintainerId),
      project_key: cdktf.stringToTerraform(this._projectKey),
      temporary: cdktf.booleanToTerraform(this._temporary),
      client_side_availability: cdktf.listMapper(dataLaunchdarklyFeatureFlagClientSideAvailabilityToTerraform, true)(this._clientSideAvailability.internalValue),
      custom_properties: cdktf.listMapper(dataLaunchdarklyFeatureFlagCustomPropertiesToTerraform, true)(this._customProperties.internalValue),
      defaults: dataLaunchdarklyFeatureFlagDefaultsToTerraform(this._defaults.internalValue),
      variations: cdktf.listMapper(dataLaunchdarklyFeatureFlagVariationsToTerraform, true)(this._variations.internalValue),
    };
  }
}
