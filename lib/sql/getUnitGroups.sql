SELECT
  mv.ID as groupName,
  mv.AttributeName as groupType,
  mv.StringValue as unitName,
  ki.id as unitId
FROM
  dbMetakatalog.dbo.tblMultiValue mv,
  dbMetakatalog.dbo.tblKonverterIDer ki
WHERE
  mv.StringValue = ki.konverterTil
  AND
  ki.id = '@unitId'
  AND
  mv.ID LIKE mv.StringValue  + '%'
ORDER BY
  mv.ID
  ASC
