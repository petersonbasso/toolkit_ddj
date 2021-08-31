import React from "react";

import { Form, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";

import { getPlatformIcon } from "../../utils/utils";

import styles from "./styles.module.scss";

const FilterGroup = ({
  className,
  type,
  filters,
  onFilter,
  clearFilters,
  platforms,
}) => {
  return (
    <div
      className={
        type === "category"
          ? styles.categoryFiltersContainer
          : styles.platformFiltersContainer
      }
    >
      {type === "category" ? (
        <>
          <span className={styles.categoryFiltersTitle}>Categorias</span>
          <div className={styles.categoryFilters}>
            {filters.map((f) => (
              <Form.Check
                className={styles.categoryFilter}
                key={`${f.label}_key`}
                id={f.slug}
                type="checkbox"
              >
                <Form.Check.Input
                  className={`${styles.filterCheckbox} ${styles.categoryCheckbox}`}
                  type="checkbox"
                  value={f.label}
                  onChange={onFilter}
                  checked={f.isChecked}
                  isValid
                />
                <Form.Check.Label
                  className={`${styles.filterLabel} ${styles.categoryLabel} ${f.slug}`}
                >
                  {f.label}
                </Form.Check.Label>
              </Form.Check>
            ))}
          </div>
        </>
      ) : (
        <>
          <span className={styles.platformFiltersTitle}>Plataformas</span>
          <div className={styles.platformFilters}>
            {filters.map((f) => (
              <Form.Check
                className={styles.platformFilter}
                key={`${f.label}_key`}
                id={f.label}
                type="checkbox"
              >
                <Form.Check.Input
                  className={`${styles.filterCheckbox} ${styles.platformCheckbox}`}
                  type="checkbox"
                  value={f.label}
                  onChange={onFilter}
                  checked={f.isChecked}
                  isValid
                />
                <Form.Check.Label
                  title={f.label}
                  className={`${styles.filterLabel} ${styles.platformLabel}`}
                >
                  <Icon icon={`${getPlatformIcon(f.label, platforms)}`} />
                </Form.Check.Label>
              </Form.Check>
            ))}
          </div>
        </>
      )}
      <div className={styles.cleanFiltersButtonContainer}>
        <Button
          className={styles.cleanFiltersButton}
          variant="light"
          title="Limpar filtros"
          onClick={clearFilters}
        >
          <Icon icon={"mdi:restart"} color={styles.lightPurple} />
        </Button>
      </div>
    </div>
  );
};

export default FilterGroup;
