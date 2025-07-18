/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLaunchdarklyTeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/team#id DataLaunchdarklyTeam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The team key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/team#key DataLaunchdarklyTeam#key}
  */
  readonly key: string;
  /**
  * role_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/team#role_attributes DataLaunchdarklyTeam#role_attributes}
  */
  readonly roleAttributes?: DataLaunchdarklyTeamRoleAttributes[] | cdktf.IResolvable;
}
export interface DataLaunchdarklyTeamMaintainers {
}

export function dataLaunchdarklyTeamMaintainersToTerraform(struct?: DataLaunchdarklyTeamMaintainers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLaunchdarklyTeamMaintainersToHclTerraform(struct?: DataLaunchdarklyTeamMaintainers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLaunchdarklyTeamMaintainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLaunchdarklyTeamMaintainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyTeamMaintainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataLaunchdarklyTeamMaintainersList extends cdktf.ComplexList {

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
  public get(index: number): DataLaunchdarklyTeamMaintainersOutputReference {
    return new DataLaunchdarklyTeamMaintainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLaunchdarklyTeamRoleAttributes {
  /**
  * The key / name of your role attribute. In the example `$${roleAttribute/testAttribute}`, the key is `testAttribute`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/team#key DataLaunchdarklyTeam#key}
  */
  readonly key: string;
  /**
  * A list of values for your role attribute. For example, if your policy statement defines the resource `"proj/$${roleAttribute/testAttribute}"`, the values would be the keys of the projects you wanted to assign access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/team#values DataLaunchdarklyTeam#values}
  */
  readonly values: string[];
}

export function dataLaunchdarklyTeamRoleAttributesToTerraform(struct?: DataLaunchdarklyTeamRoleAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataLaunchdarklyTeamRoleAttributesToHclTerraform(struct?: DataLaunchdarklyTeamRoleAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLaunchdarklyTeamRoleAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLaunchdarklyTeamRoleAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyTeamRoleAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
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

export class DataLaunchdarklyTeamRoleAttributesList extends cdktf.ComplexList {
  public internalValue? : DataLaunchdarklyTeamRoleAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataLaunchdarklyTeamRoleAttributesOutputReference {
    return new DataLaunchdarklyTeamRoleAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/team launchdarkly_team}
*/
export class DataLaunchdarklyTeam extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLaunchdarklyTeam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLaunchdarklyTeam to import
  * @param importFromId The id of the existing DataLaunchdarklyTeam that should be imported. Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLaunchdarklyTeam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "launchdarkly_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/data-sources/team launchdarkly_team} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLaunchdarklyTeamConfig
  */
  public constructor(scope: Construct, id: string, config: DataLaunchdarklyTeamConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_team',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.25.3',
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
    this._id = config.id;
    this._key = config.key;
    this._roleAttributes.internalValue = config.roleAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_role_keys - computed: true, optional: false, required: false
  public get customRoleKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_role_keys'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // maintainers - computed: true, optional: false, required: false
  private _maintainers = new DataLaunchdarklyTeamMaintainersList(this, "maintainers", true);
  public get maintainers() {
    return this._maintainers;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_keys - computed: true, optional: false, required: false
  public get projectKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('project_keys'));
  }

  // role_attributes - computed: false, optional: true, required: false
  private _roleAttributes = new DataLaunchdarklyTeamRoleAttributesList(this, "role_attributes", true);
  public get roleAttributes() {
    return this._roleAttributes;
  }
  public putRoleAttributes(value: DataLaunchdarklyTeamRoleAttributes[] | cdktf.IResolvable) {
    this._roleAttributes.internalValue = value;
  }
  public resetRoleAttributes() {
    this._roleAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleAttributesInput() {
    return this._roleAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      role_attributes: cdktf.listMapper(dataLaunchdarklyTeamRoleAttributesToTerraform, true)(this._roleAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_attributes: {
        value: cdktf.listMapperHcl(dataLaunchdarklyTeamRoleAttributesToHclTerraform, true)(this._roleAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataLaunchdarklyTeamRoleAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
