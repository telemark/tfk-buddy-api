SELECT
  o.id as name,
  m.id,
  m.org,
  m.beskrivelse,
  o.ObjectType,
  o.DisplayName,
  o.Status,
  o.PostalAddress,
  o.Street,
  o.PostalCode,
  o.City,
  o.OrganizationNumber
FROM
  dbMetakatalog.dbo.tblKonverterIDer m,
  dbMetakatalog.dbo.tblObjects o
WHERE
  m.konverterTil = o.ID
  AND
  o.ObjectType = 'Enhet'
  AND
  m.org = 'TFK'
  AND
  m.id = '@unitId'
