import type { SelectChangeEvent } from '@mui/material/Select';
import type { VersatileSelectorProps } from '@react-querybuilder/ts';
import type { ComponentPropsWithoutRef, ComponentType } from 'react';
import { useContext, useMemo } from 'react';
import { joinWith, splitBy, ValueSelector } from 'react-querybuilder';
import { RQBMaterialContext } from './RQBMaterialContext';
import type { RQBMaterialComponents, SelectType } from './types';
import { toOptions } from './utils';

type MaterialValueSelectorProps = VersatileSelectorProps &
  ComponentPropsWithoutRef<SelectType> & {
    muiComponents?: RQBMaterialComponents;
  };

export const MaterialValueSelector = ({
  className,
  handleOnChange,
  options,
  value,
  disabled,
  title,
  multiple,
  listsAsArrays,
  testID,
  rules,
  level,
  path,
  context,
  validation,
  operator,
  field,
  fieldData,
  muiComponents: muiComponentsProp,
  ...otherProps
}: MaterialValueSelectorProps) => {
  const muiComponents = useContext(RQBMaterialContext) || muiComponentsProp;

  const onChange = useMemo(
    () =>
      multiple
        ? ({ target: { value: v } }: SelectChangeEvent<string | string[]>) =>
            handleOnChange(
              Array.isArray(v)
                ? listsAsArrays
                  ? v
                  : joinWith(v, ',')
                : /* istanbul ignore next */ v
            )
        : ({ target: { value: v } }: SelectChangeEvent<string>) => handleOnChange(v),
    [handleOnChange, listsAsArrays, multiple]
  );

  const key = muiComponents ? 'mui' : 'no-mui';
  if (!muiComponents) {
    const VS = ValueSelector as ComponentType<VersatileSelectorProps>;
    return (
      <VS
        key={key}
        className={className}
        handleOnChange={handleOnChange}
        options={options}
        value={value}
        disabled={disabled}
        title={title}
        multiple={multiple}
        listsAsArrays={listsAsArrays}
        testID={testID}
        rules={rules}
        level={level}
        path={path}
        context={context}
        validation={validation}
        operator={operator}
        field={field}
        fieldData={fieldData}
      />
    );
  }

  const { FormControl, Select, ListSubheader, MenuItem } = muiComponents;

  const val = multiple ? (Array.isArray(value) ? value : splitBy(value, ',')) : value;

  return (
    <FormControl
      key={key}
      variant="standard"
      className={className}
      title={title}
      disabled={disabled}>
      <Select
        value={val}
        // @ts-expect-error onChange cannot accept string[]
        onChange={onChange}
        multiple={!!multiple}
        {...otherProps}>
        {toOptions(options ?? /* istanbul ignore next */ [], {
          ListSubheader,
          MenuItem,
        })}
      </Select>
    </FormControl>
  );
};

MaterialValueSelector.displayName = 'MaterialValueSelector';
