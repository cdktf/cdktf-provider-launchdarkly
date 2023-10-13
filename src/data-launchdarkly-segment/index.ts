// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLaunchdarklySegmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the segment's purpose
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#description DataLaunchdarklySegment#description}
  */
  readonly description?: string;
  /**
  * The segment's environment key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#env_key DataLaunchdarklySegment#env_key}
  */
  readonly envKey: string;
  /**
  * List of user keys excluded from the segment. To target on other context kinds, use the excluded_contexts block attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#excluded DataLaunchdarklySegment#excluded}
  */
  readonly excluded?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#id DataLaunchdarklySegment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of user keys included in the segment. To target on other context kinds, use the included_contexts block attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#included DataLaunchdarklySegment#included}
  */
  readonly included?: string[];
  /**
  * The unique key that references the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#key DataLaunchdarklySegment#key}
  */
  readonly key: string;
  /**
  * The segment's project key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#project_key DataLaunchdarklySegment#project_key}
  */
  readonly projectKey: string;
  /**
  * excluded_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#excluded_contexts DataLaunchdarklySegment#excluded_contexts}
  */
  readonly excludedContexts?: DataLaunchdarklySegmentExcludedContexts[] | cdktf.IResolvable;
  /**
  * included_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#included_contexts DataLaunchdarklySegment#included_contexts}
  */
  readonly includedContexts?: DataLaunchdarklySegmentIncludedContexts[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#rules DataLaunchdarklySegment#rules}
  */
  readonly rules?: DataLaunchdarklySegmentRules[] | cdktf.IResolvable;
}
export interface DataLaunchdarklySegmentExcludedContexts {
  /**
  * The context kind associated with this segment target. To target on user contexts, use the included and excluded attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#context_kind DataLaunchdarklySegment#context_kind}
  */
  readonly contextKind: string;
  /**
  * List of target object keys included in or excluded from the segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#values DataLaunchdarklySegment#values}
  */
  readonly values: string[];
}

export function dataLaunchdarklySegmentExcludedContextsToTerraform(struct?: DataLaunchdarklySegmentExcludedContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_kind: cdktf.stringToTerraform(struct!.contextKind),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class DataLaunchdarklySegmentExcludedContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLaunchdarklySegmentExcludedContexts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklySegmentExcludedContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextKind = undefined;
      this._values = undefined;
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
}

export class DataLaunchdarklySegmentExcludedContextsList extends cdktf.ComplexList {
  public internalValue? : DataLaunchdarklySegmentExcludedContexts[] | cdktf.IResolvable

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
  public get(index: number): DataLaunchdarklySegmentExcludedContextsOutputReference {
    return new DataLaunchdarklySegmentExcludedContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLaunchdarklySegmentIncludedContexts {
  /**
  * The context kind associated with this segment target. To target on user contexts, use the included and excluded attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#context_kind DataLaunchdarklySegment#context_kind}
  */
  readonly contextKind: string;
  /**
  * List of target object keys included in or excluded from the segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#values DataLaunchdarklySegment#values}
  */
  readonly values: string[];
}

export function dataLaunchdarklySegmentIncludedContextsToTerraform(struct?: DataLaunchdarklySegmentIncludedContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_kind: cdktf.stringToTerraform(struct!.contextKind),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class DataLaunchdarklySegmentIncludedContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLaunchdarklySegmentIncludedContexts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklySegmentIncludedContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextKind = undefined;
      this._values = undefined;
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
}

export class DataLaunchdarklySegmentIncludedContextsList extends cdktf.ComplexList {
  public internalValue? : DataLaunchdarklySegmentIncludedContexts[] | cdktf.IResolvable

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
  public get(index: number): DataLaunchdarklySegmentIncludedContextsOutputReference {
    return new DataLaunchdarklySegmentIncludedContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLaunchdarklySegmentRulesClauses {
  /**
  * The user attribute to operate on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#attribute DataLaunchdarklySegment#attribute}
  */
  readonly attribute: string;
  /**
  * The context kind associated with this rule clause. This argument is only valid if `rollout_weights` is also specified. If omitted, defaults to `user`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#context_kind DataLaunchdarklySegment#context_kind}
  */
  readonly contextKind?: string;
  /**
  * Whether to negate the rule clause.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#negate DataLaunchdarklySegment#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The operator associated with the rule clause. Available options are `in`, `endsWith`, `startsWith`, `matches`, `contains`, `lessThan`, `lessThanOrEqual`, `greaterThanOrEqual`, `before`, `after`, `segmentMatch`, `semVerEqual`, `semVerLessThan`, and `semVerGreaterThan`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#op DataLaunchdarklySegment#op}
  */
  readonly op: string;
  /**
  * The type for each of the clause's values. Available types are `boolean`, `string`, and `number`. If omitted, `value_type` defaults to `string`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#value_type DataLaunchdarklySegment#value_type}
  */
  readonly valueType?: string;
  /**
  * The list of values associated with the rule clause.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#values DataLaunchdarklySegment#values}
  */
  readonly values: string[];
}

export function dataLaunchdarklySegmentRulesClausesToTerraform(struct?: DataLaunchdarklySegmentRulesClauses | cdktf.IResolvable): any {
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

export class DataLaunchdarklySegmentRulesClausesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLaunchdarklySegmentRulesClauses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataLaunchdarklySegmentRulesClauses | cdktf.IResolvable | undefined) {
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

export class DataLaunchdarklySegmentRulesClausesList extends cdktf.ComplexList {
  public internalValue? : DataLaunchdarklySegmentRulesClauses[] | cdktf.IResolvable

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
  public get(index: number): DataLaunchdarklySegmentRulesClausesOutputReference {
    return new DataLaunchdarklySegmentRulesClausesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLaunchdarklySegmentRules {
  /**
  * The attribute by which to group users together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#bucket_by DataLaunchdarklySegment#bucket_by}
  */
  readonly bucketBy?: string;
  /**
  * The context kind associated with this segment rule. This argument is only valid if weight is also specified. If omitted, defaults to 'user'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#rollout_context_kind DataLaunchdarklySegment#rollout_context_kind}
  */
  readonly rolloutContextKind?: string;
  /**
  * The integer weight of the rule (between 1 and 100000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#weight DataLaunchdarklySegment#weight}
  */
  readonly weight?: number;
  /**
  * clauses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment#clauses DataLaunchdarklySegment#clauses}
  */
  readonly clauses?: DataLaunchdarklySegmentRulesClauses[] | cdktf.IResolvable;
}

export function dataLaunchdarklySegmentRulesToTerraform(struct?: DataLaunchdarklySegmentRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_by: cdktf.stringToTerraform(struct!.bucketBy),
    rollout_context_kind: cdktf.stringToTerraform(struct!.rolloutContextKind),
    weight: cdktf.numberToTerraform(struct!.weight),
    clauses: cdktf.listMapper(dataLaunchdarklySegmentRulesClausesToTerraform, true)(struct!.clauses),
  }
}

export class DataLaunchdarklySegmentRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLaunchdarklySegmentRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketBy = this._bucketBy;
    }
    if (this._rolloutContextKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutContextKind = this._rolloutContextKind;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._clauses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clauses = this._clauses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklySegmentRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketBy = undefined;
      this._rolloutContextKind = undefined;
      this._weight = undefined;
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
      this._rolloutContextKind = value.rolloutContextKind;
      this._weight = value.weight;
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

  // rollout_context_kind - computed: false, optional: true, required: false
  private _rolloutContextKind?: string; 
  public get rolloutContextKind() {
    return this.getStringAttribute('rollout_context_kind');
  }
  public set rolloutContextKind(value: string) {
    this._rolloutContextKind = value;
  }
  public resetRolloutContextKind() {
    this._rolloutContextKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutContextKindInput() {
    return this._rolloutContextKind;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // clauses - computed: false, optional: true, required: false
  private _clauses = new DataLaunchdarklySegmentRulesClausesList(this, "clauses", false);
  public get clauses() {
    return this._clauses;
  }
  public putClauses(value: DataLaunchdarklySegmentRulesClauses[] | cdktf.IResolvable) {
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

export class DataLaunchdarklySegmentRulesList extends cdktf.ComplexList {
  public internalValue? : DataLaunchdarklySegmentRules[] | cdktf.IResolvable

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
  public get(index: number): DataLaunchdarklySegmentRulesOutputReference {
    return new DataLaunchdarklySegmentRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment launchdarkly_segment}
*/
export class DataLaunchdarklySegment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_segment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.15.2/docs/data-sources/segment launchdarkly_segment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLaunchdarklySegmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataLaunchdarklySegmentConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_segment',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.15.2',
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
    this._description = config.description;
    this._envKey = config.envKey;
    this._excluded = config.excluded;
    this._id = config.id;
    this._included = config.included;
    this._key = config.key;
    this._projectKey = config.projectKey;
    this._excludedContexts.internalValue = config.excludedContexts;
    this._includedContexts.internalValue = config.includedContexts;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getNumberAttribute('creation_date');
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

  // excluded - computed: false, optional: true, required: false
  private _excluded?: string[]; 
  public get excluded() {
    return this.getListAttribute('excluded');
  }
  public set excluded(value: string[]) {
    this._excluded = value;
  }
  public resetExcluded() {
    this._excluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInput() {
    return this._excluded;
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

  // included - computed: false, optional: true, required: false
  private _included?: string[]; 
  public get included() {
    return this.getListAttribute('included');
  }
  public set included(value: string[]) {
    this._included = value;
  }
  public resetIncluded() {
    this._included = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedInput() {
    return this._included;
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

  // excluded_contexts - computed: false, optional: true, required: false
  private _excludedContexts = new DataLaunchdarklySegmentExcludedContextsList(this, "excluded_contexts", false);
  public get excludedContexts() {
    return this._excludedContexts;
  }
  public putExcludedContexts(value: DataLaunchdarklySegmentExcludedContexts[] | cdktf.IResolvable) {
    this._excludedContexts.internalValue = value;
  }
  public resetExcludedContexts() {
    this._excludedContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedContextsInput() {
    return this._excludedContexts.internalValue;
  }

  // included_contexts - computed: false, optional: true, required: false
  private _includedContexts = new DataLaunchdarklySegmentIncludedContextsList(this, "included_contexts", false);
  public get includedContexts() {
    return this._includedContexts;
  }
  public putIncludedContexts(value: DataLaunchdarklySegmentIncludedContexts[] | cdktf.IResolvable) {
    this._includedContexts.internalValue = value;
  }
  public resetIncludedContexts() {
    this._includedContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedContextsInput() {
    return this._includedContexts.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataLaunchdarklySegmentRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataLaunchdarklySegmentRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      env_key: cdktf.stringToTerraform(this._envKey),
      excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excluded),
      id: cdktf.stringToTerraform(this._id),
      included: cdktf.listMapper(cdktf.stringToTerraform, false)(this._included),
      key: cdktf.stringToTerraform(this._key),
      project_key: cdktf.stringToTerraform(this._projectKey),
      excluded_contexts: cdktf.listMapper(dataLaunchdarklySegmentExcludedContextsToTerraform, true)(this._excludedContexts.internalValue),
      included_contexts: cdktf.listMapper(dataLaunchdarklySegmentIncludedContextsToTerraform, true)(this._includedContexts.internalValue),
      rules: cdktf.listMapper(dataLaunchdarklySegmentRulesToTerraform, true)(this._rules.internalValue),
    };
  }
}
