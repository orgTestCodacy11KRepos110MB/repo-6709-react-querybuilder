import { QueryBuilderContext } from '@react-querybuilder/ctx';
import type {
  Controls,
  QueryBuilderContextProps,
  TranslationsFull,
  WithRequired,
} from '@react-querybuilder/ts';
import { useContext, useMemo } from 'react';
import { defaultControlElements } from '../../controls';
import { defaultControlClassnames, defaultTranslations } from '../../defaults';
import { mergeClassnames } from '../mergeClassnames';
import { objectKeys } from '../objectKeys';
import { usePreferProp } from './usePreferProp';

type UseMergedContextProps = WithRequired<QueryBuilderContextProps, 'translations'>;

export const useMergedContext = (props: UseMergedContextProps) => {
  // Inherit context, but props take precedence
  const rqbContext = useContext(QueryBuilderContext);

  const enableMountQueryChange = usePreferProp(
    true,
    props.enableMountQueryChange,
    rqbContext.enableMountQueryChange
  );

  // Drag-and-drop should be disabled if context sets it to false because
  // QueryBuilderDnD might not have loaded react-dnd yet. Therefore we prefer
  // the prop here only if context is true or undefined.
  const enableDragAndDrop =
    usePreferProp(false, props.enableDragAndDrop, rqbContext.enableDragAndDrop) &&
    rqbContext.enableDragAndDrop !== false;

  const debugMode = usePreferProp(false, props.debugMode, rqbContext.debugMode);

  const controlClassnames = useMemo(
    () =>
      mergeClassnames(
        defaultControlClassnames,
        rqbContext.controlClassnames,
        props.controlClassnames
      ),
    [rqbContext.controlClassnames, props.controlClassnames]
  );

  const controlElements = useMemo(
    (): Controls => ({
      ...defaultControlElements,
      ...rqbContext.controlElements,
      ...props.controlElements,
    }),
    [props.controlElements, rqbContext.controlElements]
  );

  const translations = useMemo((): TranslationsFull => {
    const translationsTemp: Partial<TranslationsFull> = {};
    objectKeys(props.translations).forEach(t => {
      const contextTranslations = rqbContext.translations;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore Different keys have different requirements
      translationsTemp[t] = {
        ...defaultTranslations[t],
        ...contextTranslations,
        ...props.translations[t],
      };
    });
    return { ...defaultTranslations, ...translationsTemp };
  }, [rqbContext.translations, props.translations]);

  const {
    controlClassnames: _controlClassnames,
    controlElements: _controlElements,
    debugMode: _debugMode,
    enableDragAndDrop: _enableDragAndDrop,
    enableMountQueryChange: _enableMountQueryChange,
    translations: _translations,
    ...otherContext
  } = rqbContext;

  return {
    controlClassnames,
    controlElements,
    debugMode,
    enableDragAndDrop,
    enableMountQueryChange,
    translations,
    ...otherContext,
  };
};
