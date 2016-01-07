SELECT
  *
FROM
  dbMetakatalog.dbo.tblObjects
WHERE
  ObjectType = 'Organisasjon'
  AND
  id = '@ordId'
