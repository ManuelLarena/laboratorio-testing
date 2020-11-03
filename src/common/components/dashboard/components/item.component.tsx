import React from 'react';
import { cx } from 'emotion';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { DashboardItemProps } from '../dashboard.vm';
import * as innerClasses from './item.styles';

export interface ClassesProps {
  root?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
}

interface Props {
  item: DashboardItemProps;
  classes?: ClassesProps;
  dataTestId?: string;
}

export const ItemComponent: React.FC<Props> = props => {
  const {
    item: { icon: Icon, title, linkTo, subtitle },
    classes,
    dataTestId,
  } = props;
  return (
    <li>
      <Link
        className={cx(
          innerClasses.root,
          classes.root,
          innerClasses.title,
          classes.title
        )}
        to={linkTo}
        data-testid={dataTestId}
        role="button"
        // aria-label="main menu"
      >
        <Icon className={cx(innerClasses.icon, classes.icon)} />
        {title}
        <Typography
          variant="h6"
          component="span"
          className={cx(innerClasses.subtitle, classes.subtitle)}
        >
          {subtitle}
        </Typography>
      </Link>
    </li>
  );
};

ItemComponent.defaultProps = {
  classes: {
    root: '',
    icon: '',
    title: '',
    subtitle: '',
  },
};
