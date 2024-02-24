// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/flag_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLaunchdarklyFlagTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the trigger is currently active or not. This property defaults to true upon creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/flag_trigger#enabled DataLaunchdarklyFlagTrigger#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The LaunchDarkly environment key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/flag_trigger#env_key DataLaunchdarklyFlagTrigger#env_key}
  */
  readonly envKey: string;
  /**
  * The key of the feature flag the trigger acts upon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/flag_trigger#flag_key DataLaunchdarklyFlagTrigger#flag_key}
  */
  readonly flagKey: string;
  /**
  * The flag trigger resource ID. This can be found on your trigger URL - please see docs for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/flag_trigger#id DataLaunchdarklyFlagTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The unique identifier of the integration you intend to set your trigger up with. "generic-trigger" should be used for integrations not explicitly supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/flag_trigger#integration_key DataLaunchdarklyFlagTrigger#integration_key}
  */
  readonly integrationKey?: string;
  /**
  * The LaunchDarkly project key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/flag_trigger#project_key DataLaunchdarklyFlagTrigger#project_key}
  */
  readonly projectKey: string;
  /**
  * instructions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/flag_trigger#instructions DataLaunchdarklyFlagTrigger#instructions}
  */
  readonly instructions?: DataLaunchdarklyFlagTriggerInstructions;
}
export interface DataLaunchdarklyFlagTriggerInstructions {
  /**
  * The action to perform when triggering. Currently supported flag actions are "turnFlagOn" and "turnFlagOff".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/flag_trigger#kind DataLaunchdarklyFlagTrigger#kind}
  */
  readonly kind: string;
}

export function dataLaunchdarklyFlagTriggerInstructionsToTerraform(struct?: DataLaunchdarklyFlagTriggerInstructionsOutputReference | DataLaunchdarklyFlagTriggerInstructions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function dataLaunchdarklyFlagTriggerInstructionsToHclTerraform(struct?: DataLaunchdarklyFlagTriggerInstructionsOutputReference | DataLaunchdarklyFlagTriggerInstructions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLaunchdarklyFlagTriggerInstructionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLaunchdarklyFlagTriggerInstructions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLaunchdarklyFlagTriggerInstructions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/flag_trigger launchdarkly_flag_trigger}
*/
export class DataLaunchdarklyFlagTrigger extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_flag_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLaunchdarklyFlagTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLaunchdarklyFlagTrigger to import
  * @param importFromId The id of the existing DataLaunchdarklyFlagTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/flag_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLaunchdarklyFlagTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "launchdarkly_flag_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.18.0/docs/data-sources/flag_trigger launchdarkly_flag_trigger} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLaunchdarklyFlagTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: DataLaunchdarklyFlagTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_flag_trigger',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.18.0',
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
    this._enabled = config.enabled;
    this._envKey = config.envKey;
    this._flagKey = config.flagKey;
    this._id = config.id;
    this._integrationKey = config.integrationKey;
    this._projectKey = config.projectKey;
    this._instructions.internalValue = config.instructions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // integration_key - computed: false, optional: true, required: false
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  public resetIntegrationKey() {
    this._integrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
  }

  // maintainer_id - computed: true, optional: false, required: false
  public get maintainerId() {
    return this.getStringAttribute('maintainer_id');
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

  // trigger_url - computed: true, optional: false, required: false
  public get triggerUrl() {
    return this.getStringAttribute('trigger_url');
  }

  // instructions - computed: false, optional: true, required: false
  private _instructions = new DataLaunchdarklyFlagTriggerInstructionsOutputReference(this, "instructions");
  public get instructions() {
    return this._instructions;
  }
  public putInstructions(value: DataLaunchdarklyFlagTriggerInstructions) {
    this._instructions.internalValue = value;
  }
  public resetInstructions() {
    this._instructions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      env_key: cdktf.stringToTerraform(this._envKey),
      flag_key: cdktf.stringToTerraform(this._flagKey),
      id: cdktf.stringToTerraform(this._id),
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      project_key: cdktf.stringToTerraform(this._projectKey),
      instructions: dataLaunchdarklyFlagTriggerInstructionsToTerraform(this._instructions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      env_key: {
        value: cdktf.stringToHclTerraform(this._envKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flag_key: {
        value: cdktf.stringToHclTerraform(this._flagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_key: {
        value: cdktf.stringToHclTerraform(this._integrationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instructions: {
        value: dataLaunchdarklyFlagTriggerInstructionsToHclTerraform(this._instructions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLaunchdarklyFlagTriggerInstructionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
