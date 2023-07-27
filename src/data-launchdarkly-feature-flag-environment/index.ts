/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLaunchdarklyFeatureFlagEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The LaunchDarkly environment key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#env_key DataLaunchdarklyFeatureFlagEnvironment#env_key}
  */
  readonly envKey: string;
  /**
  * The global feature flag's unique id in the format `<project_key>/<flag_key>`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#flag_id DataLaunchdarklyFeatureFlagEnvironment#flag_id}
  */
  readonly flagId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#id DataLaunchdarklyFeatureFlagEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The index of the variation to serve if targeting is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#off_variation DataLaunchdarklyFeatureFlagEnvironment#off_variation}
  */
  readonly offVariation?: number;
  /**
  * Whether targeting is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#on DataLaunchdarklyFeatureFlagEnvironment#on}
  */
  readonly on?: boolean | cdktf.IResolvable;
  /**
  * Whether to send event data back to LaunchDarkly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#track_events DataLaunchdarklyFeatureFlagEnvironment#track_events}
  */
  readonly trackEvents?: boolean | cdktf.IResolvable;
  /**
  * context_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#context_targets DataLaunchdarklyFeatureFlagEnvironment#context_targets}
  */
  readonly contextTargets?: DataLaunchdarklyFeatureFlagEnvironmentContextTargets[] | cdktf.IResolvable;
  /**
  * fallthrough block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#fallthrough DataLaunchdarklyFeatureFlagEnvironment#fallthrough}
  */
  readonly fallthrough?: DataLaunchdarklyFeatureFlagEnvironmentFallthrough;
  /**
  * prerequisites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#prerequisites DataLaunchdarklyFeatureFlagEnvironment#prerequisites}
  */
  readonly prerequisites?: DataLaunchdarklyFeatureFlagEnvironmentPrerequisites[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#rules DataLaunchdarklyFeatureFlagEnvironment#rules}
  */
  readonly rules?: DataLaunchdarklyFeatureFlagEnvironmentRules[] | cdktf.IResolvable;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#targets DataLaunchdarklyFeatureFlagEnvironment#targets}
  */
  readonly targets?: DataLaunchdarklyFeatureFlagEnvironmentTargets[] | cdktf.IResolvable;
}
export interface DataLaunchdarklyFeatureFlagEnvironmentContextTargets {
  /**
  * The context kind on which the flag should target in this environment. If the context_kind has not been previously specified at the project level, it will be automatically created on the project. User targets should be specified as targets attribute blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#context_kind DataLaunchdarklyFeatureFlagEnvironment#context_kind}
  */
  readonly contextKind: string;
  /**
  * List of user strings to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#values DataLaunchdarklyFeatureFlagEnvironment#values}
  */
  readonly values: string[];
  /**
  * Index of the variation to serve if a user_target is matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#variation DataLaunchdarklyFeatureFlagEnvironment#variation}
  */
  readonly variation: number;
}

export function dataLaunchdarklyFeatureFlagEnvironmentContextTargetsToTerraform(struct?: DataLaunchdarklyFeatureFlagEnvironmentContextTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_kind: cdktf.stringToTerraform(struct!.contextKind),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    variation: cdktf.numberToTerraform(struct!.variation),
  }
}

export class DataLaunchdarklyFeatureFlagEnvironmentContextTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLaunchdarklyFeatureFlagEnvironmentContextTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextKind = this._contextKind;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._variation !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyFeatureFlagEnvironmentContextTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextKind = undefined;
      this._values = undefined;
      this._variation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextKind = value.contextKind;
      this._values = value.values;
      this._variation = value.variation;
    }
  }

  // context_kind - computed: false, optional: false, required: true
  private _contextKind?: string; 
  public get contextKind() {
    return this.getStringAttribute('context_kind');
  }
  public set contextKind(value: string) {
    this._contextKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextKindInput() {
    return this._contextKind;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // variation - computed: false, optional: false, required: true
  private _variation?: number; 
  public get variation() {
    return this.getNumberAttribute('variation');
  }
  public set variation(value: number) {
    this._variation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation;
  }
}

export class DataLaunchdarklyFeatureFlagEnvironmentContextTargetsList extends cdktf.ComplexList {
  public internalValue? : DataLaunchdarklyFeatureFlagEnvironmentContextTargets[] | cdktf.IResolvable

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
  public get(index: number): DataLaunchdarklyFeatureFlagEnvironmentContextTargetsOutputReference {
    return new DataLaunchdarklyFeatureFlagEnvironmentContextTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLaunchdarklyFeatureFlagEnvironmentFallthrough {
  /**
  * Group percentage rollout by a custom attribute. This argument is only valid if rollout_weights is also specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#bucket_by DataLaunchdarklyFeatureFlagEnvironment#bucket_by}
  */
  readonly bucketBy?: string;
  /**
  * The context kind associated with the specified rollout. This argument is only valid if rollout_weights is also specified. If omitted, defaults to 'user'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#context_kind DataLaunchdarklyFeatureFlagEnvironment#context_kind}
  */
  readonly contextKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#rollout_weights DataLaunchdarklyFeatureFlagEnvironment#rollout_weights}
  */
  readonly rolloutWeights?: number[];
  /**
  * The integer variation index to serve in case of fallthrough
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#variation DataLaunchdarklyFeatureFlagEnvironment#variation}
  */
  readonly variation?: number;
}

export function dataLaunchdarklyFeatureFlagEnvironmentFallthroughToTerraform(struct?: DataLaunchdarklyFeatureFlagEnvironmentFallthroughOutputReference | DataLaunchdarklyFeatureFlagEnvironmentFallthrough): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_by: cdktf.stringToTerraform(struct!.bucketBy),
    context_kind: cdktf.stringToTerraform(struct!.contextKind),
    rollout_weights: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rolloutWeights),
    variation: cdktf.numberToTerraform(struct!.variation),
  }
}

export class DataLaunchdarklyFeatureFlagEnvironmentFallthroughOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLaunchdarklyFeatureFlagEnvironmentFallthrough | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketBy = this._bucketBy;
    }
    if (this._contextKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextKind = this._contextKind;
    }
    if (this._rolloutWeights !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutWeights = this._rolloutWeights;
    }
    if (this._variation !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyFeatureFlagEnvironmentFallthrough | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketBy = undefined;
      this._contextKind = undefined;
      this._rolloutWeights = undefined;
      this._variation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketBy = value.bucketBy;
      this._contextKind = value.contextKind;
      this._rolloutWeights = value.rolloutWeights;
      this._variation = value.variation;
    }
  }

  // bucket_by - computed: false, optional: true, required: false
  private _bucketBy?: string; 
  public get bucketBy() {
    return this.getStringAttribute('bucket_by');
  }
  public set bucketBy(value: string) {
    this._bucketBy = value;
  }
  public resetBucketBy() {
    this._bucketBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketByInput() {
    return this._bucketBy;
  }

  // context_kind - computed: false, optional: true, required: false
  private _contextKind?: string; 
  public get contextKind() {
    return this.getStringAttribute('context_kind');
  }
  public set contextKind(value: string) {
    this._contextKind = value;
  }
  public resetContextKind() {
    this._contextKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextKindInput() {
    return this._contextKind;
  }

  // rollout_weights - computed: false, optional: true, required: false
  private _rolloutWeights?: number[]; 
  public get rolloutWeights() {
    return this.getNumberListAttribute('rollout_weights');
  }
  public set rolloutWeights(value: number[]) {
    this._rolloutWeights = value;
  }
  public resetRolloutWeights() {
    this._rolloutWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutWeightsInput() {
    return this._rolloutWeights;
  }

  // variation - computed: false, optional: true, required: false
  private _variation?: number; 
  public get variation() {
    return this.getNumberAttribute('variation');
  }
  public set variation(value: number) {
    this._variation = value;
  }
  public resetVariation() {
    this._variation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation;
  }
}
export interface DataLaunchdarklyFeatureFlagEnvironmentPrerequisites {
  /**
  * The prerequisite feature flag's key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#flag_key DataLaunchdarklyFeatureFlagEnvironment#flag_key}
  */
  readonly flagKey: string;
  /**
  * The index of the prerequisite feature flag's variation to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#variation DataLaunchdarklyFeatureFlagEnvironment#variation}
  */
  readonly variation: number;
}

export function dataLaunchdarklyFeatureFlagEnvironmentPrerequisitesToTerraform(struct?: DataLaunchdarklyFeatureFlagEnvironmentPrerequisites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flag_key: cdktf.stringToTerraform(struct!.flagKey),
    variation: cdktf.numberToTerraform(struct!.variation),
  }
}

export class DataLaunchdarklyFeatureFlagEnvironmentPrerequisitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLaunchdarklyFeatureFlagEnvironmentPrerequisites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.flagKey = this._flagKey;
    }
    if (this._variation !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyFeatureFlagEnvironmentPrerequisites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flagKey = undefined;
      this._variation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flagKey = value.flagKey;
      this._variation = value.variation;
    }
  }

  // flag_key - computed: false, optional: false, required: true
  private _flagKey?: string; 
  public get flagKey() {
    return this.getStringAttribute('flag_key');
  }
  public set flagKey(value: string) {
    this._flagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagKeyInput() {
    return this._flagKey;
  }

  // variation - computed: false, optional: false, required: true
  private _variation?: number; 
  public get variation() {
    return this.getNumberAttribute('variation');
  }
  public set variation(value: number) {
    this._variation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation;
  }
}

export class DataLaunchdarklyFeatureFlagEnvironmentPrerequisitesList extends cdktf.ComplexList {
  public internalValue? : DataLaunchdarklyFeatureFlagEnvironmentPrerequisites[] | cdktf.IResolvable

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
  public get(index: number): DataLaunchdarklyFeatureFlagEnvironmentPrerequisitesOutputReference {
    return new DataLaunchdarklyFeatureFlagEnvironmentPrerequisitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLaunchdarklyFeatureFlagEnvironmentRulesClauses {
  /**
  * The user attribute to operate on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#attribute DataLaunchdarklyFeatureFlagEnvironment#attribute}
  */
  readonly attribute: string;
  /**
  * The context kind associated with this rule clause. If omitted, defaults to user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#context_kind DataLaunchdarklyFeatureFlagEnvironment#context_kind}
  */
  readonly contextKind?: string;
  /**
  * Whether to negate the rule clause
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#negate DataLaunchdarklyFeatureFlagEnvironment#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The operator associated with the rule clause. Available options are in, endsWith, startsWith, matches, contains, lessThan, lessThanOrEqual, greaterThanOrEqual, before, after, segmentMatch, semVerEqual, semVerLessThan, and semVerGreaterThan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#op DataLaunchdarklyFeatureFlagEnvironment#op}
  */
  readonly op: string;
  /**
  * The type for each of the clause's values. Available types are boolean, string, and number. If omitted, value_type defaults to string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#value_type DataLaunchdarklyFeatureFlagEnvironment#value_type}
  */
  readonly valueType?: string;
  /**
  * The list of values associated with the rule clause
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#values DataLaunchdarklyFeatureFlagEnvironment#values}
  */
  readonly values: string[];
}

export function dataLaunchdarklyFeatureFlagEnvironmentRulesClausesToTerraform(struct?: DataLaunchdarklyFeatureFlagEnvironmentRulesClauses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    context_kind: cdktf.stringToTerraform(struct!.contextKind),
    negate: cdktf.booleanToTerraform(struct!.negate),
    op: cdktf.stringToTerraform(struct!.op),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class DataLaunchdarklyFeatureFlagEnvironmentRulesClausesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLaunchdarklyFeatureFlagEnvironmentRulesClauses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._contextKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextKind = this._contextKind;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyFeatureFlagEnvironmentRulesClauses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._contextKind = undefined;
      this._negate = undefined;
      this._op = undefined;
      this._valueType = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._contextKind = value.contextKind;
      this._negate = value.negate;
      this._op = value.op;
      this._valueType = value.valueType;
      this._values = value.values;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // context_kind - computed: false, optional: true, required: false
  private _contextKind?: string; 
  public get contextKind() {
    return this.getStringAttribute('context_kind');
  }
  public set contextKind(value: string) {
    this._contextKind = value;
  }
  public resetContextKind() {
    this._contextKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextKindInput() {
    return this._contextKind;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataLaunchdarklyFeatureFlagEnvironmentRulesClausesList extends cdktf.ComplexList {
  public internalValue? : DataLaunchdarklyFeatureFlagEnvironmentRulesClauses[] | cdktf.IResolvable

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
  public get(index: number): DataLaunchdarklyFeatureFlagEnvironmentRulesClausesOutputReference {
    return new DataLaunchdarklyFeatureFlagEnvironmentRulesClausesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLaunchdarklyFeatureFlagEnvironmentRules {
  /**
  * Group percentage rollout by a custom attribute. This argument is only valid if rollout_weights is also specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#bucket_by DataLaunchdarklyFeatureFlagEnvironment#bucket_by}
  */
  readonly bucketBy?: string;
  /**
  * A human-readable description of the targeting rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#description DataLaunchdarklyFeatureFlagEnvironment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#rollout_weights DataLaunchdarklyFeatureFlagEnvironment#rollout_weights}
  */
  readonly rolloutWeights?: number[];
  /**
  * The integer variation index to serve if the rule clauses evaluate to true. This argument is only valid if clauses are also specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#variation DataLaunchdarklyFeatureFlagEnvironment#variation}
  */
  readonly variation?: number;
  /**
  * clauses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#clauses DataLaunchdarklyFeatureFlagEnvironment#clauses}
  */
  readonly clauses?: DataLaunchdarklyFeatureFlagEnvironmentRulesClauses[] | cdktf.IResolvable;
}

export function dataLaunchdarklyFeatureFlagEnvironmentRulesToTerraform(struct?: DataLaunchdarklyFeatureFlagEnvironmentRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_by: cdktf.stringToTerraform(struct!.bucketBy),
    description: cdktf.stringToTerraform(struct!.description),
    rollout_weights: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rolloutWeights),
    variation: cdktf.numberToTerraform(struct!.variation),
    clauses: cdktf.listMapper(dataLaunchdarklyFeatureFlagEnvironmentRulesClausesToTerraform, true)(struct!.clauses),
  }
}

export class DataLaunchdarklyFeatureFlagEnvironmentRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLaunchdarklyFeatureFlagEnvironmentRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketBy = this._bucketBy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._rolloutWeights !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutWeights = this._rolloutWeights;
    }
    if (this._variation !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation;
    }
    if (this._clauses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clauses = this._clauses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyFeatureFlagEnvironmentRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketBy = undefined;
      this._description = undefined;
      this._rolloutWeights = undefined;
      this._variation = undefined;
      this._clauses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketBy = value.bucketBy;
      this._description = value.description;
      this._rolloutWeights = value.rolloutWeights;
      this._variation = value.variation;
      this._clauses.internalValue = value.clauses;
    }
  }

  // bucket_by - computed: false, optional: true, required: false
  private _bucketBy?: string; 
  public get bucketBy() {
    return this.getStringAttribute('bucket_by');
  }
  public set bucketBy(value: string) {
    this._bucketBy = value;
  }
  public resetBucketBy() {
    this._bucketBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketByInput() {
    return this._bucketBy;
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

  // rollout_weights - computed: false, optional: true, required: false
  private _rolloutWeights?: number[]; 
  public get rolloutWeights() {
    return this.getNumberListAttribute('rollout_weights');
  }
  public set rolloutWeights(value: number[]) {
    this._rolloutWeights = value;
  }
  public resetRolloutWeights() {
    this._rolloutWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutWeightsInput() {
    return this._rolloutWeights;
  }

  // variation - computed: false, optional: true, required: false
  private _variation?: number; 
  public get variation() {
    return this.getNumberAttribute('variation');
  }
  public set variation(value: number) {
    this._variation = value;
  }
  public resetVariation() {
    this._variation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation;
  }

  // clauses - computed: false, optional: true, required: false
  private _clauses = new DataLaunchdarklyFeatureFlagEnvironmentRulesClausesList(this, "clauses", false);
  public get clauses() {
    return this._clauses;
  }
  public putClauses(value: DataLaunchdarklyFeatureFlagEnvironmentRulesClauses[] | cdktf.IResolvable) {
    this._clauses.internalValue = value;
  }
  public resetClauses() {
    this._clauses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clausesInput() {
    return this._clauses.internalValue;
  }
}

export class DataLaunchdarklyFeatureFlagEnvironmentRulesList extends cdktf.ComplexList {
  public internalValue? : DataLaunchdarklyFeatureFlagEnvironmentRules[] | cdktf.IResolvable

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
  public get(index: number): DataLaunchdarklyFeatureFlagEnvironmentRulesOutputReference {
    return new DataLaunchdarklyFeatureFlagEnvironmentRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLaunchdarklyFeatureFlagEnvironmentTargets {
  /**
  * List of user strings to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#values DataLaunchdarklyFeatureFlagEnvironment#values}
  */
  readonly values: string[];
  /**
  * Index of the variation to serve if a user_target is matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment#variation DataLaunchdarklyFeatureFlagEnvironment#variation}
  */
  readonly variation: number;
}

export function dataLaunchdarklyFeatureFlagEnvironmentTargetsToTerraform(struct?: DataLaunchdarklyFeatureFlagEnvironmentTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    variation: cdktf.numberToTerraform(struct!.variation),
  }
}

export class DataLaunchdarklyFeatureFlagEnvironmentTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLaunchdarklyFeatureFlagEnvironmentTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._variation !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyFeatureFlagEnvironmentTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
      this._variation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
      this._variation = value.variation;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // variation - computed: false, optional: false, required: true
  private _variation?: number; 
  public get variation() {
    return this.getNumberAttribute('variation');
  }
  public set variation(value: number) {
    this._variation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation;
  }
}

export class DataLaunchdarklyFeatureFlagEnvironmentTargetsList extends cdktf.ComplexList {
  public internalValue? : DataLaunchdarklyFeatureFlagEnvironmentTargets[] | cdktf.IResolvable

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
  public get(index: number): DataLaunchdarklyFeatureFlagEnvironmentTargetsOutputReference {
    return new DataLaunchdarklyFeatureFlagEnvironmentTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment launchdarkly_feature_flag_environment}
*/
export class DataLaunchdarklyFeatureFlagEnvironment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_feature_flag_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.13.3/docs/data-sources/feature_flag_environment launchdarkly_feature_flag_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLaunchdarklyFeatureFlagEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataLaunchdarklyFeatureFlagEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_feature_flag_environment',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.13.3',
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
    this._envKey = config.envKey;
    this._flagId = config.flagId;
    this._id = config.id;
    this._offVariation = config.offVariation;
    this._on = config.on;
    this._trackEvents = config.trackEvents;
    this._contextTargets.internalValue = config.contextTargets;
    this._fallthrough.internalValue = config.fallthrough;
    this._prerequisites.internalValue = config.prerequisites;
    this._rules.internalValue = config.rules;
    this._targets.internalValue = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // env_key - computed: false, optional: false, required: true
  private _envKey?: string; 
  public get envKey() {
    return this.getStringAttribute('env_key');
  }
  public set envKey(value: string) {
    this._envKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envKeyInput() {
    return this._envKey;
  }

  // flag_id - computed: false, optional: false, required: true
  private _flagId?: string; 
  public get flagId() {
    return this.getStringAttribute('flag_id');
  }
  public set flagId(value: string) {
    this._flagId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagIdInput() {
    return this._flagId;
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

  // off_variation - computed: false, optional: true, required: false
  private _offVariation?: number; 
  public get offVariation() {
    return this.getNumberAttribute('off_variation');
  }
  public set offVariation(value: number) {
    this._offVariation = value;
  }
  public resetOffVariation() {
    this._offVariation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offVariationInput() {
    return this._offVariation;
  }

  // on - computed: false, optional: true, required: false
  private _on?: boolean | cdktf.IResolvable; 
  public get on() {
    return this.getBooleanAttribute('on');
  }
  public set on(value: boolean | cdktf.IResolvable) {
    this._on = value;
  }
  public resetOn() {
    this._on = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onInput() {
    return this._on;
  }

  // track_events - computed: false, optional: true, required: false
  private _trackEvents?: boolean | cdktf.IResolvable; 
  public get trackEvents() {
    return this.getBooleanAttribute('track_events');
  }
  public set trackEvents(value: boolean | cdktf.IResolvable) {
    this._trackEvents = value;
  }
  public resetTrackEvents() {
    this._trackEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackEventsInput() {
    return this._trackEvents;
  }

  // context_targets - computed: false, optional: true, required: false
  private _contextTargets = new DataLaunchdarklyFeatureFlagEnvironmentContextTargetsList(this, "context_targets", true);
  public get contextTargets() {
    return this._contextTargets;
  }
  public putContextTargets(value: DataLaunchdarklyFeatureFlagEnvironmentContextTargets[] | cdktf.IResolvable) {
    this._contextTargets.internalValue = value;
  }
  public resetContextTargets() {
    this._contextTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextTargetsInput() {
    return this._contextTargets.internalValue;
  }

  // fallthrough - computed: false, optional: true, required: false
  private _fallthrough = new DataLaunchdarklyFeatureFlagEnvironmentFallthroughOutputReference(this, "fallthrough");
  public get fallthrough() {
    return this._fallthrough;
  }
  public putFallthrough(value: DataLaunchdarklyFeatureFlagEnvironmentFallthrough) {
    this._fallthrough.internalValue = value;
  }
  public resetFallthrough() {
    this._fallthrough.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallthroughInput() {
    return this._fallthrough.internalValue;
  }

  // prerequisites - computed: false, optional: true, required: false
  private _prerequisites = new DataLaunchdarklyFeatureFlagEnvironmentPrerequisitesList(this, "prerequisites", false);
  public get prerequisites() {
    return this._prerequisites;
  }
  public putPrerequisites(value: DataLaunchdarklyFeatureFlagEnvironmentPrerequisites[] | cdktf.IResolvable) {
    this._prerequisites.internalValue = value;
  }
  public resetPrerequisites() {
    this._prerequisites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prerequisitesInput() {
    return this._prerequisites.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataLaunchdarklyFeatureFlagEnvironmentRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataLaunchdarklyFeatureFlagEnvironmentRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new DataLaunchdarklyFeatureFlagEnvironmentTargetsList(this, "targets", true);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: DataLaunchdarklyFeatureFlagEnvironmentTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      env_key: cdktf.stringToTerraform(this._envKey),
      flag_id: cdktf.stringToTerraform(this._flagId),
      id: cdktf.stringToTerraform(this._id),
      off_variation: cdktf.numberToTerraform(this._offVariation),
      on: cdktf.booleanToTerraform(this._on),
      track_events: cdktf.booleanToTerraform(this._trackEvents),
      context_targets: cdktf.listMapper(dataLaunchdarklyFeatureFlagEnvironmentContextTargetsToTerraform, true)(this._contextTargets.internalValue),
      fallthrough: dataLaunchdarklyFeatureFlagEnvironmentFallthroughToTerraform(this._fallthrough.internalValue),
      prerequisites: cdktf.listMapper(dataLaunchdarklyFeatureFlagEnvironmentPrerequisitesToTerraform, true)(this._prerequisites.internalValue),
      rules: cdktf.listMapper(dataLaunchdarklyFeatureFlagEnvironmentRulesToTerraform, true)(this._rules.internalValue),
      targets: cdktf.listMapper(dataLaunchdarklyFeatureFlagEnvironmentTargetsToTerraform, true)(this._targets.internalValue),
    };
  }
}
