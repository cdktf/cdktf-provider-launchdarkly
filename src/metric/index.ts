/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * A short description of what the metric will be used for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#description Metric#description}
  */
  readonly description?: string;
  /**
  * The event key for your metric (if custom metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#event_key Metric#event_key}
  */
  readonly eventKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#id Metric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the metric is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#is_active Metric#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Whether the metric is numeric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#is_numeric Metric#is_numeric}
  */
  readonly isNumeric?: boolean | cdktf.IResolvable;
  /**
  * A unique key that will be used to reference the metric in your code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#key Metric#key}
  */
  readonly key: string;
  /**
  * The metric type -available choices are 'pageview', 'click', and 'custom'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#kind Metric#kind}
  */
  readonly kind: string;
  /**
  * The LaunchDarkly ID of the user who will maintain the metric. If not set, the API will automatically apply the member associated with your Terraform API key or the most recently-set maintainer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#maintainer_id Metric#maintainer_id}
  */
  readonly maintainerId?: string;
  /**
  * A human-readable name for your metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#name Metric#name}
  */
  readonly name: string;
  /**
  * The LaunchDarkly project key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#project_key Metric#project_key}
  */
  readonly projectKey: string;
  /**
  * A set of one or more context kinds that this metric can measure events from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#randomization_units Metric#randomization_units}
  */
  readonly randomizationUnits?: string[];
  /**
  * The CSS selector for your metric (if click metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#selector Metric#selector}
  */
  readonly selector?: string;
  /**
  * The success criteria for your metric (if numeric metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#success_criteria Metric#success_criteria}
  */
  readonly successCriteria?: string;
  /**
  * Tags associated with your resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#tags Metric#tags}
  */
  readonly tags?: string[];
  /**
  * The unit for your metric (if numeric metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#unit Metric#unit}
  */
  readonly unit?: string;
  /**
  * urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#urls Metric#urls}
  */
  readonly urls?: MetricUrls[] | cdktf.IResolvable;
}
export interface MetricUrls {
  /**
  * The url type - available choices are 'exact', 'canonical', 'substring' and 'regex'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#kind Metric#kind}
  */
  readonly kind: string;
  /**
  * The URL-matching regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#pattern Metric#pattern}
  */
  readonly pattern?: string;
  /**
  * The URL substring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#substring Metric#substring}
  */
  readonly substring?: string;
  /**
  * The exact or canonical URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#url Metric#url}
  */
  readonly url?: string;
}

export function metricUrlsToTerraform(struct?: MetricUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    substring: cdktf.stringToTerraform(struct!.substring),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class MetricUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricUrls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._substring !== undefined) {
      hasAnyValues = true;
      internalValueResult.substring = this._substring;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricUrls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._pattern = undefined;
      this._substring = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._pattern = value.pattern;
      this._substring = value.substring;
      this._url = value.url;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // substring - computed: false, optional: true, required: false
  private _substring?: string; 
  public get substring() {
    return this.getStringAttribute('substring');
  }
  public set substring(value: string) {
    this._substring = value;
  }
  public resetSubstring() {
    this._substring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substringInput() {
    return this._substring;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class MetricUrlsList extends cdktf.ComplexList {
  public internalValue? : MetricUrls[] | cdktf.IResolvable

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
  public get(index: number): MetricUrlsOutputReference {
    return new MetricUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric launchdarkly_metric}
*/
export class Metric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Metric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Metric to import
  * @param importFromId The id of the existing Metric that should be imported. Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Metric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "launchdarkly_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.16.0/docs/resources/metric launchdarkly_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricConfig
  */
  public constructor(scope: Construct, id: string, config: MetricConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_metric',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.16.0',
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
    this._eventKey = config.eventKey;
    this._id = config.id;
    this._isActive = config.isActive;
    this._isNumeric = config.isNumeric;
    this._key = config.key;
    this._kind = config.kind;
    this._maintainerId = config.maintainerId;
    this._name = config.name;
    this._projectKey = config.projectKey;
    this._randomizationUnits = config.randomizationUnits;
    this._selector = config.selector;
    this._successCriteria = config.successCriteria;
    this._tags = config.tags;
    this._unit = config.unit;
    this._urls.internalValue = config.urls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // event_key - computed: false, optional: true, required: false
  private _eventKey?: string; 
  public get eventKey() {
    return this.getStringAttribute('event_key');
  }
  public set eventKey(value: string) {
    this._eventKey = value;
  }
  public resetEventKey() {
    this._eventKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventKeyInput() {
    return this._eventKey;
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

  // is_active - computed: false, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // is_numeric - computed: false, optional: true, required: false
  private _isNumeric?: boolean | cdktf.IResolvable; 
  public get isNumeric() {
    return this.getBooleanAttribute('is_numeric');
  }
  public set isNumeric(value: boolean | cdktf.IResolvable) {
    this._isNumeric = value;
  }
  public resetIsNumeric() {
    this._isNumeric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNumericInput() {
    return this._isNumeric;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // randomization_units - computed: true, optional: true, required: false
  private _randomizationUnits?: string[]; 
  public get randomizationUnits() {
    return cdktf.Fn.tolist(this.getListAttribute('randomization_units'));
  }
  public set randomizationUnits(value: string[]) {
    this._randomizationUnits = value;
  }
  public resetRandomizationUnits() {
    this._randomizationUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomizationUnitsInput() {
    return this._randomizationUnits;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // success_criteria - computed: false, optional: true, required: false
  private _successCriteria?: string; 
  public get successCriteria() {
    return this.getStringAttribute('success_criteria');
  }
  public set successCriteria(value: string) {
    this._successCriteria = value;
  }
  public resetSuccessCriteria() {
    this._successCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successCriteriaInput() {
    return this._successCriteria;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // urls - computed: false, optional: true, required: false
  private _urls = new MetricUrlsList(this, "urls", false);
  public get urls() {
    return this._urls;
  }
  public putUrls(value: MetricUrls[] | cdktf.IResolvable) {
    this._urls.internalValue = value;
  }
  public resetUrls() {
    this._urls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      event_key: cdktf.stringToTerraform(this._eventKey),
      id: cdktf.stringToTerraform(this._id),
      is_active: cdktf.booleanToTerraform(this._isActive),
      is_numeric: cdktf.booleanToTerraform(this._isNumeric),
      key: cdktf.stringToTerraform(this._key),
      kind: cdktf.stringToTerraform(this._kind),
      maintainer_id: cdktf.stringToTerraform(this._maintainerId),
      name: cdktf.stringToTerraform(this._name),
      project_key: cdktf.stringToTerraform(this._projectKey),
      randomization_units: cdktf.listMapper(cdktf.stringToTerraform, false)(this._randomizationUnits),
      selector: cdktf.stringToTerraform(this._selector),
      success_criteria: cdktf.stringToTerraform(this._successCriteria),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      unit: cdktf.stringToTerraform(this._unit),
      urls: cdktf.listMapper(metricUrlsToTerraform, true)(this._urls.internalValue),
    };
  }
}
